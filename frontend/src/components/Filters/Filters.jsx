import React from "react";

function Filters() {
  return (
    <div className="filters">

      <select>
        <option>State</option>
        <option>Uttar Pradesh</option>
        <option>Gujarat</option>
      </select>

      <select>
        <option>City</option>
        <option>Varanasi</option>
        <option>Ahmedabad</option>
      </select>

      <select>
        <option>Deity</option>
        <option>Shiva</option>
        <option>Vishnu</option>
      </select>

      <select>
        <option>Festival</option>
        <option>Mahashivratri</option>
        <option>Janmashtami</option>
      </select>

      <select>
        <option>Popularity</option>
        <option>Most Popular</option>
        <option>Trending</option>
      </select>

    </div>
  );
}

export default Filters;