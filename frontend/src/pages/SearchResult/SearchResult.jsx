import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./SearchResult.css";

const SearchResult = () => {
  const { state } = useLocation();

  if (!state || !state.temple) {
    return (
      <div className="search-result">
        <h2>No temple found.</h2>
        <Link to="/">⬅ Back to Home</Link>
      </div>
    );
  }

  const temple = state.temple;

  return (
    <div className="search-result">
      <div className="result-card">

        {temple.image && (
          <img
            src={temple.image}
            alt={temple.name}
            className="result-image"
          />
        )}

        <h1>{temple.name}</h1>

        <p>{temple.history}</p>

        {temple.page && (
          <a
            href={temple.page}
            target="_blank"
            rel="noreferrer"
            className="wiki-btn"
          >
            Read More on Wikipedia
          </a>
        )}

      </div>
    </div>
  );
};

export default SearchResult;