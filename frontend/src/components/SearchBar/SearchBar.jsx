import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sacredSites } from '../../data/temples';
import './SearchBar.css';

const searchWebForQuery = async (query) => {
  try {
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyC9a0zP2vLxP9m31tW8H5Q8pPrQ8eE64m0&q=${encodeURIComponent(query)}&cx=017576662512468239146:omuauf_lfve`);
    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }

    return data.items[0]?.link || `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  } catch (error) {
    return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  }
};

const normalizeSearchText = (value = '') => {
  const replacements = [
    ['vaisno', 'vaishno'],
    ['vishno', 'vaishno'],
    ['maata', 'mata'],
    ['mataa', 'mata'],
    ['shree', 'shri'],
    ['neelkhanth', 'neelkanth'],
  ];

  let normalized = value.toLowerCase().trim().replace(/[^a-z0-9]+/g, ' ');

  replacements.forEach(([from, to]) => {
    normalized = normalized.replace(new RegExp(`\\b${from}\\b`, 'g'), to);
  });

  return normalized.replace(/\s+/g, ' ').trim();
};

const SearchBar = ({ onSearch, initialQuery = '' }) => {
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim();

    if (!trimmedQuery) return;

    if (onSearch) {
      onSearch(trimmedQuery);
      return;
    }

    const normalizedQuery = normalizeSearchText(trimmedQuery);
    const matchedSite = sacredSites.find((site) => {
      const searchableEntries = [site.name, site.city, site.state, site.deity, site.type]
        .map((value) => normalizeSearchText(value));

      return searchableEntries.some((entry) => {
        if (!entry || !normalizedQuery) return false;

        if (entry.includes(normalizedQuery) || normalizedQuery.includes(entry)) {
          return true;
        }

        const queryTokens = normalizedQuery.split(' ').filter(Boolean);
        const entryTokens = entry.split(' ').filter(Boolean);

        if (queryTokens.length === 1) {
          return entryTokens.some((token) => token.includes(queryTokens[0]) || queryTokens[0].includes(token));
        }

        return queryTokens.every((token) =>
          entryTokens.some((entryToken) => entryToken.includes(token) || token.includes(entryToken))
        );
      });
    });

    if (matchedSite) {
      const targetPath = `/temples/${matchedSite.id}`;
      navigate(targetPath);
      return;
    }

    const webResult = await searchWebForQuery(trimmedQuery);
    if (webResult) {
      window.open(webResult, '_blank', 'noopener,noreferrer');
      return;
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search temple, mosque, gurudwara, church, city, or state..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchBar;