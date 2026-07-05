import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🕉️</span>
          <span className="logo-text">Temple Heritage</span>
        </Link>
        
        <div className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>

          <Link to="/temples" className="nav-link">Temples</Link>

          <Link to="/festivals" className="nav-link">Festivals</Link>

          <Link to="/routes" className="nav-link">Pilgrimage Circuits</Link>

          <Link to="/states" className="nav-link">Explore by State</Link>

          <Link to="/about" className="nav-link">About</Link>

<Link to="/contact" className="nav-link">Contact</Link>
         
          {isAdmin ? (
            <>
              <Link to="/admin" className="nav-link admin-link">Dashboard</Link>
              <button onClick={handleLogout} className="btn-logout">Logout</button>
            </>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
