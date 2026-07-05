import React from 'react';
import FestivalCard from '../../components/FestivalCard/FestivalCard';
import { topFestivals } from '../../data/festivals';

const Festivals = () => {
  return (
    <div className="container" style={{ padding: '40px 20px', minHeight: '80vh' }}>
      <h1 className="page-header">Temple Festivals</h1>
      <p className="page-description">
        Experience the vibrant culture and spiritual celebrations across India's greatest temples.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
        {topFestivals.map(festival => (
          <FestivalCard key={festival.id} festival={festival} />
        ))}
      </div>
    </div>
  );
};

export default Festivals;
