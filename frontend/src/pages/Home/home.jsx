import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import TempleCard from "../../components/TempleCard/TempleCard";
import FestivalCard from "../../components/FestivalCard/FestivalCard";
import { api } from "../../services/api";
import { topTemples } from "../../data/temples";
import bannerImage from "../../assets/temple-banner.jpg.jpeg";
import "./home.css";

const Home = () => {
  const [temples, setTemples] = useState([]);
  const [festivals, setFestivals] = useState([]);

  useEffect(() => {
    const loadFeaturedContent = async () => {
      try {
        const templeData = await api.getAllTemples();
        setTemples(Array.isArray(templeData) && templeData.length > 0 ? templeData.slice(0, 3) : topTemples.slice(0, 3));
      } catch (error) {
        setTemples(topTemples.slice(0, 3));
      }

      try {
        const festivalData = await api.getAllFestivals();
        setFestivals(Array.isArray(festivalData) && festivalData.length > 0 ? festivalData.slice(0, 3) : []);
      } catch (error) {
        setFestivals([]);
      }
    };

    loadFeaturedContent();
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="hero-overlay">
          <div className="container">
            <h1 className="hero-title">India Temple Heritage & Pilgrimage Portal</h1>
            <p className="hero-subtitle">
              Discover Sacred Temples, Pilgrimage Routes and Cultural Heritage of India
            </p>
            <div className="hero-search">
              <SearchBar />
            </div>
          </div>
        </div>
      </section>
      {/* Statistics */}
<section className="stats-section">
  <div className="container stats-grid">

    <div className="stat-card">
      <h2>500+</h2>
      <p>Temples</p>
    </div>

    <div className="stat-card">
      <h2>28</h2>
      <p>States</p>
    </div>

    <div className="stat-card">
      <h2>100+</h2>
      <p>Festivals</p>
    </div>

    <div className="stat-card">
      <h2>10+</h2>
      <p>Pilgrimage Routes</p>
    </div>

  </div>
</section>
{/* Portal Features */}
<section className="section-padding">
  <div className="container">
    <h2 className="section-title">Why Choose Our Portal?</h2>

    <div className="features-grid">

      <div className="feature-card">
        <div className="feature-icon">🛕</div>
        <h3>Temple Information</h3>
        <p>
          Complete details about India's famous temples, history,
          deity and significance.
        </p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">🗺️</div>
        <h3>Pilgrimage Routes</h3>
        <p>
          Explore Char Dham, Jyotirlinga, Shakti Peeth and many
          pilgrimage circuits.
        </p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">🎉</div>
        <h3>Festival Calendar</h3>
        <p>
          Get festival dates, celebrations and important religious
          events throughout the year.
        </p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">📍</div>
        <h3>Travel Guide</h3>
        <p>
          Find nearby hotels, restaurants, railway stations,
          airports and Google Maps navigation.
        </p>
      </div>

    </div>
  </div>
</section>
      {/* Featured Temples */}
      <section className="container section-padding">
        <h2 className="section-title">Featured Temples</h2>
        <div className="temple-grid">
          {temples.map((temple) => (
            <TempleCard key={temple._id || temple.templeId || temple.id} temple={temple} />
          ))}
        </div>
      </section>
          <section className="section-padding bg-light">
  <div className="container">

    <h2 className="section-title">
      Popular Pilgrimage Circuits
    </h2>
    <section className="section-padding">
  <div className="container">

    <h2 className="section-title">
      Explore by State
    </h2>

    <div className="state-grid">

      <div className="state-card">Uttar Pradesh</div>

      <div className="state-card">Tamil Nadu</div>

      <div className="state-card">Jammu & Kashmir</div>

      <div className="state-card">Odisha</div>

      <div className="state-card">Karnataka</div>

      <div className="state-card">Maharashtra</div>

      <div className="state-card">Gujarat</div>

      <div className="state-card">Uttarakhand</div>

    </div>

  </div>
</section>

    <div className="chips">

      <span>🛕 Char Dham</span>

      <span>🔱 12 Jyotirlinga</span>

      <span>🙏 Shakti Peeth</span>

      <span>🪔 Ramayana Circuit</span>

      <span>☸ Buddhist Circuit</span>

      <span>🌊 Pancha Bhoota Sthalams</span>

    </div>

  </div>
</section>
      {/* Upcoming Festivals */}
      <section className="bg-light section-padding">
        <div className="container">
          <h2 className="section-title">Upcoming Festivals</h2>
          <div className="festival-grid">
            {festivals.map((festival) => (
              <FestivalCard key={festival._id || festival.festivalId || festival.id} festival={festival} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
