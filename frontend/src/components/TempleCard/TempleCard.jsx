import React from 'react';
import { Link } from 'react-router-dom';
import './TempleCard.css';

const TempleCard = ({ temple }) => {
  const templeId = temple?.id ?? temple?.templeId ?? temple?._id;

  return (
    <div className="temple-card">
      <div className="temple-img-wrapper">
        <img src={temple.image} alt={temple.name} className="temple-img" />
        <div className="temple-rating">★ {temple.rating}</div>
      </div>
      <div className="temple-info">
        <h3>{temple.name}</h3>
        <p className="temple-location">📍 {temple.city}, {temple.state}</p>
        <p className="temple-deity">🕉️ {temple.deity}</p>
        <Link to={`/temples/${templeId}`} className="view-details-btn">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default TempleCard;