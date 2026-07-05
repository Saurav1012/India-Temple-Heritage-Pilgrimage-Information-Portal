import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container footer-content">

        {/* About */}
        <div className="footer-section">
          <h2>🛕 India Temple Heritage</h2>

          <p>
            Discover India's rich spiritual heritage, famous temples,
            pilgrimage routes, festivals and travel information from one
            trusted platform.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/temples">Temples</Link></li>
            <li><Link to="/festivals">Festivals</Link></li>
            <li><Link to="/routes">Pilgrimage Routes</Link></li>
            <li><Link to="/states">States</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>

        </div>

        {/* Contact */}
        <div className="footer-section">

          <h3>Contact</h3>

          <p>📧 saurav@templeheritage.in</p>

          <p>📞 +91 8307106647</p>

          <p>📍 India</p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} India Temple Heritage &
          Pilgrimage Portal
        </p>

        <p>
          Developed using React • Node.js • Express • MongoDB
        </p>

      </div>

    </footer>
  );
};

export default Footer;