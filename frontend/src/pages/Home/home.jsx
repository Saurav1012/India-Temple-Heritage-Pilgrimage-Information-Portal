import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import bannerImage from "../../assets/temple-banner.jpg.jpeg";

const featuredTemples = [
  {
    name: "Shri Mata Vaishno Devi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZb0b0z3Y2EPfrquMxkQ0xHVZgOsOO0kDzZHXVSrWKw&s=10",
  },
  {
    name: "Rishikesh",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa",
  },
  {
    name: "Somnath Temple",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_A6nyFSL67yTd4Jw5LJ_6uy0cfjHZ9qTKbCi3jcqoew&s=10",
  },
  {
    name: "Kashi Vishwanath Temple",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b",
  },
  {
    name: "Tirupati Balaji Temple",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f",
  },{
    name: "Ram Mandir",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm6JZQ97-IiNBUK5pwQV8wqLUEm6QcWcXbBO34GbJbeQ&s=10",
  },{
    name: "Golden Temple",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxjxqldhcsJVDGrkMqI_qvLHg4y7F7_Z0UsTW_T8hkdQ&s=10",
  },{
    name: "Kedarnath Temple",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMWKUCSioiZlbAl-owXAIB0umiuQUUahFaTHYyePD14Q&s=10",
  }
];

const pilgrimageCircuits = [
  "Vaishno Devi",
  "Haridwar",
  "Rishikesh",
  "Gangotri",
  "Gomukh",
  "Bhimashankar",
];

const festivals = [
  "Maha Shivratri",
  "Janmashtami",
  "Navratri",
  "Diwali",
];

const states = [
  "Uttar Pradesh",
  "Uttarakhand",
  "Gujarat",
  "Maharashtra",
  "Tamil Nadu",
  "Andhra Pradesh",
];

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="overlay">
          <h1>India Temple Heritage & Pilgrimage Portal</h1>
          <p>
            Discover Sacred Temples, Pilgrimage Routes and Cultural Heritage of
            India
          </p>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search Temple, City or State..."
            />
            <Link to="/temples">
            <button>Search</button>
          </Link>
          </div>
        </div>
      </section>

      {/* Featured Temples */}
<section className="section">
  <h2>Featured Temples</h2>

  <div className="cards">
    {featuredTemples.map((temple, index) => (
      <Link
        to="/temples"
        key={index}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="card">
          {temple.image && (
            <img src={temple.image} alt={temple.name} />
          )}
          <h3>{temple.name}</h3>
        </div>
      </Link>
    ))}
  </div>
</section>

      {/* Pilgrimage Circuits */}
      <section className="section">
        <h2>Popular Pilgrimage Circuits</h2>

        <div className="chips">
          {pilgrimageCircuits.map((place, index) => (
            <span key={index}>{place}</span>
          ))}
        </div>
      </section>

      {/* Festivals */}
      <section className="section">
        <h2>Upcoming Festivals</h2>

        <div className="festival-container">
          {festivals.map((festival, index) => (
            <div className="festival-card" key={index}>
              <h3>{festival}</h3>
              <p>Celebrate with devotion and spirituality.</p>
            </div>
          ))}
        </div>
      </section>

      {/* States */}
      <section className="section">
        <h2>Explore by State</h2>

        <div className="state-grid">
          {states.map((state, index) => (
            <div className="state-card" key={index}>
              {state}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;