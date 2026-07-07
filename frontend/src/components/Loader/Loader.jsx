import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>

      <h3>Loading Temple Information...</h3>

      <p>Please wait...</p>
    </div>
  );
};

export default Loader;