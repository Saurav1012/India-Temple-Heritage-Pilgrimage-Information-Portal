import React from "react";

function TempleCard({ temple }) {
  return (
    <div className="temple-card">
      <img src={temple.image} alt={temple.name} />

      <h3>{temple.name}</h3>

      <p>{temple.city}, {temple.state}</p>

      <p>Deity: {temple.deity}</p>

      <button>View Details</button>
    </div>
  );
}

export default TempleCard;