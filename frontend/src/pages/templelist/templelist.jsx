import React, { useEffect, useState } from 'react';
import TempleCard from '../../components/TempleCard/TempleCard';
import { topTemples } from '../../data/temples';
import './templelist.css';

const TempleList = () => {
  const [temples] = useState(topTemples);

  return (
    <div className="temple-list-page container">
      <h1 className="page-header">Explore Temples</h1>
      <p className="page-description">
        Browse our complete list of {topTemples.length} featured temples from India.
      </p>

      {temples.length > 0 ? (
        <div className="temples-grid">
          {temples.map((temple) => (
            <TempleCard key={temple.id ?? temple.templeId ?? temple._id} temple={temple} />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <h3>No temples found</h3>
          <p>Try searching with a different keyword like a state or deity.</p>
        </div>
      )}
    </div>
  );
};

export default TempleList;
