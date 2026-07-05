import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { topTemples } from '../../data/temples';
import './StateDetails.css';

const stateDetailsMap = {
  'andhra-pradesh': {
    name: 'Andhra Pradesh',
    capital: 'Amaravati',
    description: 'Andhra Pradesh is known for its rich spiritual heritage, grand temple architecture, and major pilgrimage destinations.',
    highlights: ['Home to Tirumala Venkateswara Temple', 'Strong traditions of Vaishnavism and temple festivals'],
    featuredTemples: [2],
  },
  'arunachal-pradesh': {
    name: 'Arunachal Pradesh',
    capital: 'Itanagar',
    description: 'This northeastern state blends ancient tribal traditions with sacred mountain landscapes and temple heritage.',
    highlights: ['Known for monasteries and hilltop shrines', 'Peaceful spiritual retreats in the Himalayas'],
    featuredTemples: [],
  },
  'assam': {
    name: 'Assam',
    capital: 'Dispur',
    description: 'Assam is celebrated for its temples, river traditions, and cultural celebrations rooted in devotion.',
    highlights: ['Sacred riverfront temples', 'Strong connection with Vaishnavite heritage'],
    featuredTemples: [],
  },
  'bihar': {
    name: 'Bihar',
    capital: 'Patna',
    description: 'Bihar has deep historical and spiritual importance, especially for places linked to Buddha and ancient pilgrimages.',
    highlights: ['Ancient pilgrimage circuits', 'Important Buddhist and Hindu heritage sites'],
    featuredTemples: [],
  },
  'chhattisgarh': {
    name: 'Chhattisgarh',
    capital: 'Raipur',
    description: 'Chhattisgarh is known for its sacred shrines, tribal devotion, and temple traditions in central India.',
    highlights: ['Temple towns with strong local traditions', 'Festivals tied to rural spirituality'],
    featuredTemples: [],
  },
  'goa': {
    name: 'Goa',
    capital: 'Panaji',
    description: 'Goa is home to serene temples and a blend of cultural influences that shape its spiritual landscape.',
    highlights: ['Historic temples with Portuguese-era surroundings', 'Calm pilgrimage spots'],
    featuredTemples: [],
  },
  'gujarat': {
    name: 'Gujarat',
    capital: 'Gandhinagar',
    description: 'Gujarat is one of India’s most prominent pilgrimage states, with famous Shiva and Krishna temples along the coast.',
    highlights: ['Somnath Jyotirlinga', 'Dwarkadhish Temple and Krishna heritage'],
    featuredTemples: [5, 8],
  },
  'haryana': {
    name: 'Haryana',
    capital: 'Chandigarh',
    description: 'Haryana carries important temple heritage and several sacred sites linked to local devotional traditions.',
    highlights: ['Ancient religious towns', 'Growing prominence in pilgrimage tourism'],
    featuredTemples: [],
  },
  'himachal-pradesh': {
    name: 'Himachal Pradesh',
    capital: 'Shimla',
    description: 'Himachal Pradesh offers mountain temples, spiritual retreats, and vibrant religious festivals.',
    highlights: ['High-altitude shrines', 'Temple towns in the Himalayan belt'],
    featuredTemples: [],
  },
  'jharkhand': {
    name: 'Jharkhand',
    capital: 'Ranchi',
    description: 'Jharkhand is rich in tribal spirituality and sacred sites that attract devotees throughout the year.',
    highlights: ['Forest shrines and hill temples', 'Strong regional devotional traditions'],
    featuredTemples: [],
  },
  'karnataka': {
    name: 'Karnataka',
    capital: 'Bengaluru',
    description: 'Karnataka is famous for ancient temple architecture, especially in the Hoysala and Chola traditions.',
    highlights: ['Historic temple complexes', 'Strong links to Shaiva and Vaishnava traditions'],
    featuredTemples: [],
  },
  'kerala': {
    name: 'Kerala',
    capital: 'Thiruvananthapuram',
    description: 'Kerala blends temple culture, Ayurveda, and art in one of India’s most spiritually vibrant states.',
    highlights: ['Temple festivals and cultural processions', 'Ancient sacred centers'],
    featuredTemples: [],
  },
  'madhya-pradesh': {
    name: 'Madhya Pradesh',
    capital: 'Bhopal',
    description: 'Madhya Pradesh is known for sacred rivers, ancient shrines, and temple towns with deep history.',
    highlights: ['Important pilgrimage routes', 'Historic temples in central India'],
    featuredTemples: [],
  },
  'maharashtra': {
    name: 'Maharashtra',
    capital: 'Mumbai',
    description: 'Maharashtra is home to some of India’s most visited pilgrimage centers, including Shirdi and Mumbai’s famous Ganesha temples.',
    highlights: ['Shirdi Sai Baba Temple', 'Siddhivinayak Temple'],
    featuredTemples: [12, 13],
  },
  'manipur': {
    name: 'Manipur',
    capital: 'Imphal',
    description: 'Manipur combines sacred landscapes, local traditions, and temple-centered cultural life.',
    highlights: ['Temple towns tied to local mythology', 'Rich spiritual festivals'],
    featuredTemples: [],
  },
  'meghalaya': {
    name: 'Meghalaya',
    capital: 'Shillong',
    description: 'Meghalaya brings together hill landscapes and community-led spiritual traditions in a tranquil setting.',
    highlights: ['Sacred natural sites', 'Small yet significant temple communities'],
    featuredTemples: [],
  },
  'mizoram': {
    name: 'Mizoram',
    capital: 'Aizawl',
    description: 'Mizoram offers a distinct cultural and spiritual experience rooted in peaceful mountain traditions.',
    highlights: ['Unique local worship traditions', 'Calm temple surroundings'],
    featuredTemples: [],
  },
  'nagaland': {
    name: 'Nagaland',
    capital: 'Kohima',
    description: 'Nagaland’s spiritual life reflects its heritage, local customs, and sacred community spaces.',
    highlights: ['Community-based religious traditions', 'Distinct cultural pilgrimage experiences'],
    featuredTemples: [],
  },
  'odisha': {
    name: 'Odisha',
    capital: 'Bhubaneswar',
    description: 'Odisha is famed for its temple architecture, sacred festivals, and the Jagannath tradition.',
    highlights: ['Jagannath Temple', 'Ancient temple cities and festivals'],
    featuredTemples: [4],
  },
  'punjab': {
    name: 'Punjab',
    capital: 'Chandigarh',
    description: 'Punjab is spiritually rich, from Sikh heritage to temple city traditions and devotional culture.',
    highlights: ['Golden Temple', 'Strong traditions of community service and worship'],
    featuredTemples: [10],
  },
  'rajasthan': {
    name: 'Rajasthan',
    capital: 'Jaipur',
    description: 'Rajasthan’s temples and sacred sites reflect a blend of desert spirituality and royal patronage.',
    highlights: ['Historic temple towns', 'Devotional traditions in desert landscapes'],
    featuredTemples: [],
  },
  'sikkim': {
    name: 'Sikkim',
    capital: 'Gangtok',
    description: 'Sikkim combines Buddhist monasteries, mountain spirituality, and peaceful pilgrimage settings.',
    highlights: ['High-altitude sacred sites', 'Rich monastic heritage'],
    featuredTemples: [],
  },
  'tamil-nadu': {
    name: 'Tamil Nadu',
    capital: 'Chennai',
    description: 'Tamil Nadu is one of India’s grandest temple states, with centuries of Dravidian architecture and devotion.',
    highlights: ['Meenakshi Amman Temple', 'Brihadeeswarar and Kailasanathar temples'],
    featuredTemples: [9, 14, 15],
  },
  'telangana': {
    name: 'Telangana',
    capital: 'Hyderabad',
    description: 'Telangana preserves sacred urban and rural temple heritage shaped by dynastic history and local devotion.',
    highlights: ['Historic temple clusters', 'Deeply rooted local festivals'],
    featuredTemples: [],
  },
  'tripura': {
    name: 'Tripura',
    capital: 'Agartala',
    description: 'Tripura’s temple heritage reflects its cultural roots and spiritual traditions in the northeastern belt.',
    highlights: ['Historic shrines and local pilgrimage customs'],
    featuredTemples: [],
  },
  'uttar-pradesh': {
    name: 'Uttar Pradesh',
    capital: 'Lucknow',
    description: 'Uttar Pradesh is one of India’s most significant pilgrimage states, home to Varanasi and sacred temple circuits.',
    highlights: ['Kashi Vishwanath Temple', 'Major Shiva and Vaishnavite pilgrimage routes'],
    featuredTemples: [1],
  },
  'uttarakhand': {
    name: 'Uttarakhand',
    capital: 'Dehradun',
    description: 'Uttarakhand is revered for its Himalayan temples, char dham routes, and spiritual mountain landscapes.',
    highlights: ['Kedarnath and Badrinath', 'Sacred pilgrimage routes in the Himalayas'],
    featuredTemples: [6, 7],
  },
  'west-bengal': {
    name: 'West Bengal',
    capital: 'Kolkata',
    description: 'West Bengal offers a rich mix of temple heritage, sacred river traditions, and cultural festivals.',
    highlights: ['Historic temple towns', 'Deep devotional traditions'],
    featuredTemples: [],
  },
  'andaman-and-nicobar-islands': {
    name: 'Andaman and Nicobar Islands',
    capital: 'Port Blair',
    description: 'The islands carry a distinctive island culture, with spiritual centers shaped by coastal life and local traditions.',
    highlights: ['Island-based religious communities', 'Quiet coastal temple visits'],
    featuredTemples: [],
  },
  'chandigarh': {
    name: 'Chandigarh',
    capital: 'Chandigarh',
    description: 'Chandigarh blends modern planning with peaceful religious spaces and community-centered spiritual life.',
    highlights: ['Urban temple visits', 'Easy access to nearby pilgrimage circuits'],
    featuredTemples: [],
  },
  'dadra-and-nagar-haveli-and-daman-and-diu': {
    name: 'Dadra and Nagar Haveli and Daman and Diu',
    capital: 'Daman',
    description: 'This union territory has cultural diversity and local worship traditions that enrich the region’s spiritual heritage.',
    highlights: ['Coastal temples and local festivals', 'Unique regional devotional identity'],
    featuredTemples: [],
  },
  'delhi': {
    name: 'Delhi',
    capital: 'New Delhi',
    description: 'Delhi is a major spiritual hub with iconic temples, cultural heritage sites, and pilgrimage destinations nearby.',
    highlights: ['Akshardham Temple', 'Rich mix of ancient and modern devotion'],
    featuredTemples: [11],
  },
  'jammu-and-kashmir': {
    name: 'Jammu and Kashmir',
    capital: 'Srinagar / Jammu',
    description: 'Jammu and Kashmir is known for sacred shrines, mountain pilgrimages, and deeply rooted spiritual traditions.',
    highlights: ['Vaishno Devi shrine', 'Scenic pilgrimage routes'],
    featuredTemples: [3],
  },
  'ladakh': {
    name: 'Ladakh',
    capital: 'Leh',
    description: 'Ladakh’s spiritual landscape is shaped by monasteries, mountain paths, and peaceful devotional culture.',
    highlights: ['High-altitude monasteries', 'Breathtaking pilgrimage settings'],
    featuredTemples: [],
  },
  'lakshadweep': {
    name: 'Lakshadweep',
    capital: 'Kavaratti',
    description: 'Lakshadweep offers a calm island setting with local shrines and close-knit community traditions.',
    highlights: ['Island spirituality', 'Simple and serene temple visits'],
    featuredTemples: [],
  },
  'puducherry': {
    name: 'Puducherry',
    capital: 'Pondicherry',
    description: 'Puducherry brings together coastal charm, spiritual retreats, and cultural devotion in a unique setting.',
    highlights: ['Temple visits in a coastal heritage town', 'Peaceful spiritual atmosphere'],
    featuredTemples: [],
  },
};

const normalizeSlug = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const StateDetailsPage = () => {
  const { slug } = useParams();
  const detail = stateDetailsMap[slug] || null;
  const resolvedName = detail?.name || decodeURIComponent(slug || '').replace(/-/g, ' ');

  const featuredTemples = (detail?.featuredTemples || [])
    .map((id) => topTemples.find((temple) => temple.id === id))
    .filter(Boolean);

  return (
    <div className="state-details-page">
      <section className="state-details-hero">
        <div className="container">
          <p className="state-details-eyebrow">Spiritual Highlights</p>
          <h1>{resolvedName}</h1>
          <p>{detail?.description || 'Discover the cultural and spiritual importance of this destination through its famous temples and heritage.'}</p>
        </div>
      </section>

      <section className="container state-details-section">
        <div className="state-details-grid">
          <div className="state-details-card">
            <h2>Quick Facts</h2>
            <ul>
              <li><strong>Capital:</strong> {detail?.capital || 'Not listed'}</li>
              <li><strong>Type:</strong> {detail?.name === 'Andaman and Nicobar Islands' || detail?.name === 'Chandigarh' || detail?.name === 'Dadra and Nagar Haveli and Daman and Diu' || detail?.name === 'Delhi' || detail?.name === 'Jammu and Kashmir' || detail?.name === 'Ladakh' || detail?.name === 'Lakshadweep' || detail?.name === 'Puducherry' ? 'Union Territory' : 'State'}</li>
            </ul>
          </div>

          <div className="state-details-card">
            <h2>Why It Matters</h2>
            <ul>
              {(detail?.highlights || []).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container state-details-section">
        <h2>Famous Temples</h2>
        {featuredTemples.length > 0 ? (
          <div className="temple-list-grid">
            {featuredTemples.map((temple) => (
              <div className="temple-list-card" key={temple.id}>
                <h3>{temple.name}</h3>
                <p>{temple.city}</p>
                <p><strong>Deity:</strong> {temple.deity}</p>
                <p>{temple.history}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="state-details-empty">
            <p>Famous temple information for this destination will be added soon.</p>
            <Link to="/states" className="back-link">Back to all states</Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default StateDetailsPage;
