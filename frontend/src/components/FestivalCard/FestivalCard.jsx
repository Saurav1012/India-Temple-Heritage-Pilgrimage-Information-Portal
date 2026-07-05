import React from 'react';
import './FestivalCard.css';

const FestivalCard = ({ festival }) => {
  return (
    <div className="festival-card">
      <div className="festival-img-wrapper">
        <img src={festival.image} alt={festival.name} className="festival-img" />
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
