import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="overlay">
          <h1>About India Temple Heritage Portal</h1>
          <p>
            Preserving India's rich spiritual heritage through a modern,
            informative and user-friendly digital platform.
          </p>
        </div>
      </section>

      {/* About Project */}
      <section className="about-section container">
        <h2>Our Project</h2>

        <p>
          India Temple Heritage & Pilgrimage Information Portal is a centralized
          platform designed to provide authentic information about famous
          temples across India. Users can explore temple history, deity,
          rituals, darshan timings, pilgrimage routes, visitor guidelines and
          nearby facilities.
        </p>

        <p>
          The portal promotes Indian culture, tourism and heritage while making
          pilgrimage planning easier for devotees and travelers.
        </p>
      </section>

      {/* Mission Vision */}
      <section className="mission-section">

        <div className="mission-card">
          <h2>🎯 Mission</h2>

          <p>
            To provide reliable, structured and accessible temple information
            for pilgrims, tourists and researchers while preserving India's
            cultural heritage.
          </p>

        </div>

        <div className="mission-card">

          <h2>👁 Vision</h2>

          <p>
            To become India's largest digital repository of temple heritage,
            pilgrimage information and cultural knowledge.
          </p>

        </div>

      </section>

      {/* Features */}

      <section className="features-section container">

        <h2>Portal Features</h2>

        <div className="feature-grid">

          <div className="feature-card">
            🛕
            <h3>Temple Information</h3>
            <p>
              Complete details of famous temples including history, deity,
              rituals and timings.
            </p>
          </div>

          <div className="feature-card">
            🗺
            <h3>Pilgrimage Routes</h3>
            <p>
              Explore important pilgrimage circuits across India.
            </p>
          </div>

          <div className="feature-card">
            🎉
            <h3>Festivals</h3>
            <p>
              Stay updated with important festivals celebrated at different
              temples.
            </p>
          </div>

          <div className="feature-card">
            🌦
            <h3>Live Weather</h3>
            <p>
              View live weather conditions before planning your visit.
            </p>
          </div>

          <div className="feature-card">
            📍
            <h3>Google Maps</h3>
            <p>
              Direct navigation to temples along with nearby facilities.
            </p>
          </div>

          <div className="feature-card">
            🔎
            <h3>Smart Search</h3>
            <p>
              Search temples by state, city, deity and temple name.
            </p>
          </div>

        </div>

      </section>

      {/* Technology Stack */}

      <section className="tech-section">

        <h2>Technology Stack</h2>

        <div className="tech-grid">

          <div className="tech-box">⚛ React JS</div>

          <div className="tech-box">🎨 CSS3</div>

          <div className="tech-box">🟢 Node JS</div>

          <div className="tech-box">🚀 Express JS</div>

          <div className="tech-box">🍃 MongoDB</div>

          <div className="tech-box">🌐 REST API</div>

        </div>

      </section>

      {/* Developer */}

      <section className="developer-section">

        <h2>Developer</h2>

        <div className="developer-card">

          <div className="developer-avatar">
            👨‍💻
          </div>

          <h3>Saurav Chauhan</h3>

          <p>
            MERN Stack Developer passionate about building modern web
            applications and preserving India's cultural heritage through
            technology.
          </p>

        </div>

      </section>

    </div>
  );
};

export default About;