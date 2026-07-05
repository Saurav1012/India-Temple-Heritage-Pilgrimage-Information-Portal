import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Temple from './models/Temple.js';
import Festival from './models/Festival.js';
import Circuit from './models/Circuit.js';
import User from './models/User.js';

dotenv.config();
connectDB();

const temples = [
  {
    templeId: 1,
    name: "Kashi Vishwanath Temple",
    city: "Varanasi",
    state: "Uttar Pradesh",
    deity: "Lord Shiva",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b",
    history: "One of the most famous Hindu temples dedicated to Lord Shiva, located on the western bank of the holy river Ganga.",
    darshanTimings: "3:00 AM - 11:00 PM",
    rituals: ["Mangala Aarti", "Bhog Aarti", "Sandhya Aarti", "Shringar Aarti", "Shayan Aarti"],
    guidelines: "Traditional Indian attire is mandatory. Mobiles and cameras are not allowed inside.",
    facilities: ["Locker Rooms", "Wheelchair Support", "Prasad Counter"],
    rating: 4.9
  },
  {
    templeId: 2,
    name: "Somnath Temple",
    city: "Prabhas Patan",
    state: "Gujarat",
    deity: "Lord Shiva",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220",
    history: "Considered to be the first among the twelve Jyotirlinga shrines of Shiva. It has been destroyed and rebuilt several times.",
    darshanTimings: "6:00 AM - 10:00 PM",
    rituals: ["Morning Aarti", "Afternoon Bhog", "Evening Aarti", "Light and Sound Show"],
    guidelines: "Modest clothing required. Photography strictly prohibited.",
    facilities: ["Guest Houses", "Cloak Room", "Free Food (Langar)"],
    rating: 4.8
  },
  {
    templeId: 3,
    name: "Tirupati Balaji Temple",
    city: "Tirumala",
    state: "Andhra Pradesh",
    deity: "Lord Venkateswara",
    image: "/images/tirupati.jpg",
    history: "A landmark Vaishnavite temple situated in the hill town of Tirumala. It is one of the richest and most visited religious sites in the world.",
    darshanTimings: "3:00 AM - 1:30 AM (Next Day)",
    rituals: ["Suprabhatam", "Thomala Seva", "Archana", "Kalyanotsavam"],
    guidelines: "Strict traditional dress code. No electronics allowed.",
    facilities: ["Massive Accommodation Complexes", "Free Meals (Annadanam)", "Medical Centers"],
    rating: 4.9
  },
  {
    templeId: 4,
    name: "Shri Mata Vaishno Devi",
    city: "Katra",
    state: "Jammu & Kashmir",
    deity: "Mata Vaishno Devi",
    image: "https://images.unsplash.com/photo-1524492514790-831f5b6d9a1c",
    history: "A manifestation of the Hindu Mother Goddess Durga or Adi Shakti. The temple is located in a cave in the Trikuta Mountains.",
    darshanTimings: "Open 24 Hours",
    rituals: ["Atka Aarti", "Morning/Evening Poojan"],
    guidelines: "Registration (Yatra Parchi) is mandatory before starting the trek.",
    facilities: ["Helicopter Service", "Battery Cars", "Dharamshalas", "Food Stalls"],
    rating: 4.9
  },
  {
    templeId: 5,
    name: "Meenakshi Amman Temple",
    city: "Madurai",
    state: "Tamil Nadu",
    deity: "Goddess Meenakshi & Lord Sundareshwarar",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220",
    history: "A historic Hindu temple located on the southern bank of the Vaigai River. Known for its astonishing architecture and towering gopurams.",
    darshanTimings: "5:00 AM - 12:30 PM, 4:00 PM - 10:00 PM",
    rituals: ["Kala Santhi", "Uchikalam", "Sayarakshai", "Ardha Jamam"],
    guidelines: "Strict dress code: Dhotis for men, Sarees/Salwars for women.",
    facilities: ["Guide Services", "Cloak Room", "Battery operated cars for elderly"],
    rating: 4.8
  }
];

const festivals = [
  { festivalId: 1, name: "Maha Shivratri", date: "March 8, 2026", description: "The Great Night of Shiva. Celebrated with fasting and night-long vigils at all Shiva temples.", image: "/images/mahashivratri.jpg" },
  { festivalId: 2, name: "Navratri", date: "October 3, 2026", description: "Nine nights dedicated to Goddess Durga. Major celebrations at Vaishno Devi and Shakti Peethas.", image: "/images/navratri.jpg" },
  { festivalId: 3, name: "Janmashtami", date: "August 26, 2026", description: "Celebration of Lord Krishna's birth. Grand festivities in Mathura and Vrindavan.", image: "/images/janmashtami.jpg" },
  { festivalId: 4, name: "Tirupati Balaji Mandir", date: "September 15, 2026", description: "Nine-day mega festival celebrated at Tirupati Balaji Temple.", image: "/images/tirupati.jpg" }
];

const circuits = [
  { circuitId: 1, name: "Char Dham Yatra", states: "Uttarakhand", description: "Journey to Yamunotri, Gangotri, Kedarnath, and Badrinath.", templesCount: 4 },
  { circuitId: 2, name: "Jyotirlinga Circuit", states: "Pan-India", description: "Pilgrimage to the 12 sacred shrines of Lord Shiva across India.", templesCount: 12 },
  { circuitId: 3, name: "Shakti Peetha Circuit", states: "Pan-India", description: "Visit the revered shrines dedicated to the Mother Goddess.", templesCount: 51 }
];

const importData = async () => {
  try {
    await Temple.deleteMany();
    await Festival.deleteMany();
    await Circuit.deleteMany();
    await User.deleteMany();

    await Temple.insertMany(temples);
    await Festival.insertMany(festivals);
    await Circuit.insertMany(circuits);
    await User.create({ username: 'admin', password: 'admin123' });

    console.log('Data Imported successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

importData();
