import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound">

      <div className="notfound-container">

        <h1>404</h1>

        <h2>Oops! Page Not Found</h2>

        <p>
          The page you are looking for doesn't exist or has been moved.
        </p>

        <div className="temple-icon">
          🛕
        </div>

        <Link to="/" className="home-btn">
          ← Back to Home
        </Link>

      </div>

    </div>
  );
};

export default NotFound;