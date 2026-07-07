import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import "./Signup.css";

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validations
    if (!formData.username.trim() || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Call API from context
    const result = await signup(formData.username, formData.password);
    
    if (result.success) {
      navigate('/login'); // Standard flow properly working here
    } else {
      setError(result.message || 'This username already exists');
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-box">
        <h1>✨ Create Account</h1>
        <p className="subtitle">
          Join India's Temple Heritage Community
        </p>

        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          
          {error && <p className="error-msg">{error}</p>}
          <button type="submit">Sign Up</button>
        </form>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;