import React from 'react';
import { Link } from 'react-router-dom';
import './States.css';

const createSlug = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const statesData = [
  { name: 'Andhra Pradesh', capital: 'Amaravati' },
  { name: 'Arunachal Pradesh', capital: 'Itanagar' },
  { name: 'Assam', capital: 'Dispur' },
  { name: 'Bihar', capital: 'Patna' },
  { name: 'Chhattisgarh', capital: 'Raipur' },
  { name: 'Goa', capital: 'Panaji' },
  { name: 'Gujarat', capital: 'Gandhinagar' },
  { name: 'Haryana', capital: 'Chandigarh' },
  { name: 'Himachal Pradesh', capital: 'Shimla' },
  { name: 'Jharkhand', capital: 'Ranchi' },
  { name: 'Karnataka', capital: 'Bengaluru' },
  { name: 'Kerala', capital: 'Thiruvananthapuram' },
  { name: 'Madhya Pradesh', capital: 'Bhopal' },
  { name: 'Maharashtra', capital: 'Mumbai' },
  { name: 'Manipur', capital: 'Imphal' },
  { name: 'Meghalaya', capital: 'Shillong' },
  { name: 'Mizoram', capital: 'Aizawl' },
  { name: 'Nagaland', capital: 'Kohima' },
  { name: 'Odisha', capital: 'Bhubaneswar' },
  { name: 'Punjab', capital: 'Chandigarh' },
  { name: 'Rajasthan', capital: 'Jaipur' },
  { name: 'Sikkim', capital: 'Gangtok' },
  { name: 'Tamil Nadu', capital: 'Chennai' },
  { name: 'Telangana', capital: 'Hyderabad' },
  { name: 'Tripura', capital: 'Agartala' },
  { name: 'Uttar Pradesh', capital: 'Lucknow' },
  { name: 'Uttarakhand', capital: 'Dehradun' },
  { name: 'West Bengal', capital: 'Kolkata' },
];

const unionTerritoriesData = [
  { name: 'Andaman and Nicobar Islands', capital: 'Port Blair' },
  { name: 'Chandigarh', capital: 'Chandigarh' },
  { name: 'Dadra and Nagar Haveli and Daman and Diu', capital: 'Daman' },
  { name: 'Delhi', capital: 'New Delhi' },
  { name: 'Jammu and Kashmir', capital: 'Srinagar / Jammu' },
  { name: 'Ladakh', capital: 'Leh' },
  { name: 'Lakshadweep', capital: 'Kavaratti' },
  { name: 'Puducherry', capital: 'Pondicherry' },
];

const StatesPage = () => {
  return (
    <div className="states-page">
      <section className="states-hero">
        <div className="container">
          <p className="states-eyebrow">Discover India by Region</p>
          <h1>Explore by State</h1>
          <p>Browse all Indian states and union territories with their capitals in one place.</p>
        </div>
      </section>

      <section className="container states-section">
        <h2>States</h2>
        <div className="states-grid">
          {statesData.map((item) => (
            <Link to={`/states/${createSlug(item.name)}`} className="state-card" key={item.name}>
              <h3>{item.name}</h3>
              <p>
                <span>Capital:</span> {item.capital}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container states-section">
        <h2>Union Territories</h2>
        <div className="states-grid">
          {unionTerritoriesData.map((item) => (
            <Link to={`/states/${createSlug(item.name)}`} className="state-card" key={item.name}>
              <h3>{item.name}</h3>
              <p>
                <span>Capital:</span> {item.capital}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StatesPage;
