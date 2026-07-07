import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSacredSiteById as getLocalTempleById } from '../../data/temples';
import { api } from '../../services/api';
// 1. Loader component ka import add kiya gaya hai
import Loader from "../../components/Loader/Loader";
import './TempleDetails.css';

const getWeatherLabel = (code) => {
  const weatherMap = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Rime fog',
    51: 'Light drizzle',
    53: 'Moderate drizzle',
    55: 'Dense drizzle',
    61: 'Slight rain',
    63: 'Moderate rain',
    65: 'Heavy rain',
    71: 'Slight snow',
    73: 'Moderate snow',
    75: 'Heavy snow',
    95: 'Thunderstorm',
  };

  return weatherMap[code] || 'Weather update';
};

const TempleDetails = () => {
  const { id } = useParams();
  const [temple, setTemple] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [externalInfo, setExternalInfo] = useState(null);
  const [externalImage, setExternalImage] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadTemple = async () => {
      setLoading(true);
      const localTemple = getLocalTempleById(id);
      if (localTemple) {
        if (isMounted) {
          setTemple(localTemple);
          setLoading(false);
        }
        return;
      }

      try {
        const apiTemple = await api.getTempleById(id);
        if (isMounted) {
          setTemple(apiTemple || null);
        }
      } catch (error) {
        if (isMounted) {
          setTemple(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadTemple();

    return () => {
      isMounted = false;
    };
  }, [id]);

  useEffect(() => {
    const loadWeather = async () => {
      if (!temple?.city || !temple?.state) {
        setWeatherInfo(null);
        return;
      }

      try {
        const geoRes = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(`${temple.city}, ${temple.state}`)}&count=1&language=en&format=json`
        );
        const geoData = await geoRes.json();
        const location = geoData.results?.[0];

        if (!location) {
          setWeatherInfo(null);
          return;
        }

        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`
        );
        const weatherData = await weatherRes.json();
        setWeatherInfo(weatherData.current);
      } catch (error) {
        setWeatherInfo(null);
      }
    };

    loadWeather();
  }, [temple]);

  useEffect(() => {
    let isActive = true;

    const loadExternalInfo = async () => {
      if (!temple?.name) {
        setExternalInfo(null);
        setExternalImage(null);
        return;
      }

      setExternalImage(null);

      const searchTerms = [temple.name, `${temple.name} ${temple.city}`, `${temple.name} ${temple.state}`]
        .filter(Boolean)
        .map((value) => value.trim());

      for (const term of searchTerms) {
        try {
          const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(term)}`);
          if (!response.ok) continue;

          const data = await response.json();
          if (isActive && data.extract) {
            setExternalInfo({
              title: data.title || temple.name,
              extract: data.extract,
              url: data.content_urls?.desktop?.page || data.content_urls?.mobile?.page || '',
            });
            setExternalImage(data.thumbnail?.source || null);
            return;
          }
        } catch (error) {
          continue;
        }
      }

      if (isActive) {
        setExternalInfo(null);
        setExternalImage(null);
      }
    };

    loadExternalInfo();

    return () => {
      isActive = false;
    };
  }, [temple?.name, temple?.city, temple?.state]);

  // 2. Pehle ki loading string wali line ko isse replace kar diya hai
  if (loading) {
    return <Loader />;
  }

  if (!temple) return <div className="no-results">Temple not found.</div>;

  const rituals = temple.rituals || [];
  const facilities = temple.facilities || [];
  const siteTypeLabel = temple.type ? temple.type.charAt(0).toUpperCase() + temple.type.slice(1) : 'Temple';
  const resolvedImage = temple.image || externalImage;
  const headerStyle = resolvedImage
    ? { backgroundImage: `url(${resolvedImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { background: 'linear-gradient(135deg, #fff3e0 0%, #e3f2fd 100%)' };
  const mapsQuery = encodeURIComponent(`${temple.name}, ${temple.city}, ${temple.state}`);

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  const nearbyLinks = {
    hotel: `https://www.google.com/search?q=hotels+near+${mapsQuery}`,
    restaurant: `https://www.google.com/search?q=restaurants+near+${mapsQuery}`,
    railway: `https://www.google.com/search?q=railway+station+near+${mapsQuery}`,
    airport: `https://www.google.com/search?q=airport+near+${mapsQuery}`,
    parking: `https://www.google.com/search?q=parking+near+${mapsQuery}`,
  };
  const currentUrl = window.location.href;

  const shareTemple = () => {
    navigator.clipboard.writeText(currentUrl);
    alert("Temple link copied!");
  };

  const whatsappShare = `https://wa.me/?text=${encodeURIComponent(
    `${temple.name}\n${currentUrl}`
  )}`;

  const travelLinks = {
    bus: `https://www.google.com/search?q=bus+fare+to+${mapsQuery}`,
    train: `https://www.google.com/search?q=train+fare+to+${mapsQuery}`,
    car: `https://www.google.com/search?q=car+fare+to+${mapsQuery}`,
    bike: `https://www.google.com/search?q=bike+fare+to+${mapsQuery}`,
    flight: `https://www.google.com/search?q=flight+fare+to+${mapsQuery}`,
  };

  return (
    <div className="temple-details-page">
      <div className="details-header" style={headerStyle}>
        <div className="details-overlay">
          <div className="container">
            <h1>{temple.name}</h1>
            <p className="details-location">📍 {temple.city}, {temple.state}</p>
            <p className="details-type">{siteTypeLabel}</p>
          </div>
        </div>
      </div>

      <div className="container details-content">
        <div className="details-main">
          <section className="detail-section">
            <h2>About</h2>
            <p>{temple.history || temple.description || externalInfo?.extract || 'More details coming soon.'}</p>
          </section>

          {externalInfo?.extract ? (
            <section className="detail-section">
              <h2>More from the Web</h2>
              <p>{externalInfo.extract}</p>
              {externalInfo.url ? (
                <a href={externalInfo.url} target="_blank" rel="noreferrer" className="external-link">
                  Read more on Wikipedia
                </a>
              ) : null}
            </section>
          ) : null}

          <section className="detail-section">
            <h2>Primary Deity</h2>
            <p className="deity-name">🕉️ {temple.deity}</p>
          </section>

          <section className="detail-section">
            <h2>Location & Travel</h2>
            <p><strong>Situated at:</strong> {temple.city}, {temple.state}</p>
            <p><strong>Weather:</strong> {weatherInfo ? `${Math.round(weatherInfo.temperature_2m)}°C • ${getWeatherLabel(weatherInfo.weather_code)}` : 'Live weather will appear when location data is available.'}</p>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="map-btn"
            >
              📍 Open in Google Maps
            </a>
            <div className="share-buttons">
              <a
                href={whatsappShare}
                target="_blank"
                rel="noreferrer"
                className="share-btn"
              >
                📲 WhatsApp
              </a>

              <button
                type="button"
                onClick={shareTemple}
                className="share-btn"
              >
                📋 Copy Link
              </button>
            </div>
            <div className="travel-links">
              <a href={travelLinks.bus} target="_blank" rel="noreferrer">Bus fare</a>
              <a href={travelLinks.train} target="_blank" rel="noreferrer">Train fare</a>
              <a href={travelLinks.car} target="_blank" rel="noreferrer">Car fare</a>
              <a href={travelLinks.bike} target="_blank" rel="noreferrer">Bike fare</a>
              <a href={travelLinks.flight} target="_blank" rel="noreferrer">Flight fare</a>
            </div>
            <div className="nearby-links">
              <h3>Nearby Facilities</h3>
              <a href={nearbyLinks.hotel} target="_blank" rel="noreferrer">🏨 Hotels</a>
              <a href={nearbyLinks.restaurant} target="_blank" rel="noreferrer">🍽 Restaurants</a>
              <a href={nearbyLinks.railway} target="_blank" rel="noreferrer">🚆 Railway Station</a>
              <a href={nearbyLinks.airport} target="_blank" rel="noreferrer">✈ Airport</a>
              <a href={nearbyLinks.parking} target="_blank" rel="noreferrer">🅿 Parking</a>
            </div>
          </section>

          <section className="detail-section">
            <h2>Rituals & Poojas</h2>
            {rituals.length > 0 ? (
              <ul className="rituals-list">
                {rituals.map((ritual, idx) => (
                  <li key={idx}>{ritual}</li>
                ))}
              </ul>
            ) : (
              <p>No ritual details available yet.</p>
            )}
          </section>
        </div>

        <div className="details-sidebar">
          <div className="sidebar-card">
            <h3>Visitor Information</h3>
            <div className="info-item">
              <strong>Darshan Timings:</strong>
              <p>{temple.darshanTimings || 'Timings available on arrival.'}</p>
            </div>
            <div className="info-item">
              <strong>Guidelines:</strong>
              <p>{temple.guidelines || 'Please follow temple etiquette and local guidance.'}</p>
            </div>
            <div className="info-item">
              <strong>Facilities:</strong>
              {facilities.length > 0 ? (
                <ul className="facilities-list">
                  {facilities.map((fac, idx) => (
                    <li key={idx}>{fac}</li>
                  ))}
                </ul>
              ) : (
                <p>No facility details available yet.</p>
              )}
            </div>
          </div>

          <Link to="/temples" className="back-btn">
            ← Back to Temples
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TempleDetails;