import React from 'react';
import './FestivalCard.css';

const FestivalCard = ({ festival }) => {
  return (
    <div className="festival-card">
      <div className="festival-img-wrapper" style={{ background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '150px' }}>
        <div style={{ fontSize: '40px' }}>🎪</div>
        <div className="festival-date">{festival.date}</div>
      </div>
      <div className="festival-info">
        <h3>{festival.name}</h3>
        <p>{festival.description}</p>
      </div>
    </div>
  );
};

export default FestivalCard;
