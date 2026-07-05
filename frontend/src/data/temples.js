import kashiImage from '../assets/temples/kashi-vishwanath.jpg';
import tirumalaImage from '../assets/temples/tirumala-venkateswara.jpg';
import vaishnoImage from '../assets/temples/vaishno-devi.jpg';
import jagannathImage from '../assets/temples/jagannath.jpg';
import somnathImage from '../assets/temples/somnath.jpg';
import kedarnathImage from '../assets/temples/kedarnath.jpg';
import badrinathImage from '../assets/temples/badrinath.jpg';
import dwarkadhishImage from '../assets/temples/dwarkadhish.jpg';
import meenakshiImage from '../assets/temples/meenakshi-amman.jpg';
import goldenImage from '../assets/temples/golden-temple.jpg';
import akshardhamImage from '../assets/temples/akshardham.jpg';
import shirdiImage from '../assets/temples/shirdi-sai-baba.jpg';
import siddhivinayakImage from '../assets/temples/siddhivinayak.jpg';
import brihadeeswararImage from '../assets/temples/brihadeeswarar.jpg';
import kailasanatharImage from '../assets/temples/kailasanathar.jpg';
import sacredSiteDefaultImage from '../assets/sacred-site-default.svg';

const templeImages = {
  kashi: kashiImage,
  tirumala: tirumalaImage,
  vaishno: vaishnoImage,
  jagannath: jagannathImage,
  somnath: somnathImage,
  kedarnath: kedarnathImage,
  badrinath: badrinathImage,
  dwarkadhish: dwarkadhishImage,
  meenakshi: meenakshiImage,
  golden: goldenImage,
  akshardham: akshardhamImage,
  shirdi: shirdiImage,
  siddhivinayak: siddhivinayakImage,
  brihadeeswarar: brihadeeswararImage,
  kailasanathar: kailasanatharImage,
};

export const topTemples = [
  {
    id: 1,
    name: 'Kashi Vishwanath Temple',
    city: 'Varanasi',
    state: 'Uttar Pradesh',
    deity: 'Lord Shiva',
    rating: 4.9,
    image: templeImages.kashi,
    history: 'Kashi Vishwanath is one of the most sacred temples dedicated to Lord Shiva, situated on the banks of the Ganges in Varanasi. It has been a pilgrimage site for thousands of years.',
    rituals: ['Mangala Aarti', 'Shiva Abhishekam', 'Bhasma Aarti', 'Shringar Aarti'],
    darshanTimings: '05:00 AM to 10:00 PM',
    guidelines: 'Maintain silence, no leather items inside, and follow the daily aarti timings.',
    facilities: ['Prasad counters', 'Restrooms', 'Accommodation nearby']
  },
  {
    id: 2,
    name: 'Tirumala Venkateswara Temple',
    city: 'Tirupati',
    state: 'Andhra Pradesh',
    deity: 'Lord Venkateswara',
    rating: 4.9,
    image: templeImages.tirumala,
    history: 'Tirumala Temple is the richest temple in the world and one of the most visited pilgrimage sites, known for its grand architecture and spiritual rituals.',
    rituals: ['Suprabhatam', 'Kalyanotsavam', 'Arjitha Seva', 'Sahasra Deepalankara Seva'],
    darshanTimings: '03:00 AM to 09:00 PM',
    guidelines: 'Dress code enforced, no mobile phones inside, and carry sacred items only.',
    facilities: ['Queue halls', 'Annadanam', 'Accommodation']
  },
  {
    id: 3,
    name: 'Vaishno Devi Temple',
    city: 'Katra',
    state: 'Jammu & Kashmir',
    deity: 'Mata Vaishno Devi',
    rating: 4.8,
    image: templeImages.vaishno,
    history: 'Located in the Trikuta Mountains, Vaishno Devi is one of the most revered Shakti Peethas, visited by millions seeking blessings of the Mother Goddess.',
    rituals: ['Aarti', 'Yatra Puja', 'Navaratri Celebrations'],
    darshanTimings: '24 hours daily',
    guidelines: 'Pilgrims should bring warm clothes, wear comfortable shoes, and respect the sacred environment.',
    facilities: ['Medical aid', 'Langar services', 'Rest huts']
  },
  {
    id: 4,
    name: 'Jagannath Temple',
    city: 'Puri',
    state: 'Odisha',
    deity: 'Lord Jagannath',
    rating: 4.8,
    image: templeImages.jagannath,
    history: 'The Jagannath Temple is famous for the annual Rath Yatra and is a major center of Vaishnavite worship in eastern India.',
    rituals: ['Shringar', 'Bhoga Alankara', 'Chhappan Bhog', 'Rath Yatra'],
    darshanTimings: '05:00 AM to 10:00 PM',
    guidelines: 'Non-Hindus are not allowed inside the main temple; photography is prohibited.',
    facilities: ['Annadanam', 'Pilgrim lodging', 'Restrooms']
  },
  {
    id: 5,
    name: 'Somnath Temple',
    city: 'Prabhas Patan',
    state: 'Gujarat',
    deity: 'Lord Shiva',
    rating: 4.8,
    image: templeImages.somnath,
    history: 'Somnath is considered the first of the twelve Jyotirlinga shrines of Shiva and has been rebuilt multiple times after invasions.',
    rituals: ['Abhishekam', 'Aarti', 'Special Poojas on Mondays and Shivratri'],
    darshanTimings: '05:00 AM to 11:00 PM',
    guidelines: 'Follow instructions from temple staff and avoid plastic inside the complex.',
    facilities: ['Parking', 'Restrooms', 'Prasad shops']
  },
  {
    id: 6,
    name: 'Kedarnath Temple',
    city: 'Uttarakhand',
    state: 'Uttarakhand',
    deity: 'Lord Shiva',
    rating: 4.9,
    image: templeImages.kedarnath,
    history: 'Kedarnath is one of the twelve Jyotirlingas and lies in the Himalayas, close to the source of the Mandakini River.',
    rituals: ['Mangala Aarti', 'Abhishekam', 'Bhoomi Puja'],
    darshanTimings: '04:00 AM to 09:00 PM',
    guidelines: 'The trek is arduous; only experienced pilgrims should attempt without proper guidance.',
    facilities: ['Emergency medical camps', 'Rest points', 'Cafeterias']
  },
  {
    id: 7,
    name: 'Badrinath Temple',
    city: 'Uttarakhand',
    state: 'Uttarakhand',
    deity: 'Lord Vishnu',
    rating: 4.9,
    image: templeImages.badrinath,
    history: 'Badrinath is one of the Char Dham pilgrimage sites and is dedicated to Lord Vishnu as Badrinarayan.',
    rituals: ['Maha Abhishekam', 'Suprabhatam', 'Shringar'],
    darshanTimings: '05:00 AM to 09:00 PM',
    guidelines: 'Seasonal opening and closing; check dates before planning your visit.',
    facilities: ['Accommodation', 'Boating', 'Shops']
  },
  {
    id: 8,
    name: 'Dwarkadhish Temple',
    city: 'Dwarka',
    state: 'Gujarat',
    deity: 'Lord Krishna',
    rating: 4.7,
    image: templeImages.dwarkadhish,
    history: 'Dwarkadhish Temple is dedicated to Krishna and is a key site in the Krishna pilgrimage circuit along the western coast.',
    rituals: ['Mangala Aarti', 'Shringar', 'Raj Bhog', 'Shayan Aarti'],
    darshanTimings: '04:00 AM to 10:00 PM',
    guidelines: 'Respect the rituals and dress modestly inside the temple.',
    facilities: ['Pilgrim lodging', 'Food stalls', 'Restrooms']
  },
  {
    id: 9,
    name: 'Meenakshi Amman Temple',
    city: 'Madurai',
    state: 'Tamil Nadu',
    deity: 'Goddess Meenakshi',
    rating: 4.9,
    image: templeImages.meenakshi,
    history: 'The Meenakshi Temple is famous for its towering gopurams and intricate Dravidian architecture at the heart of Madurai.',
    rituals: ['Alankaram', 'Uchi Kala Puja', 'Evening Aarti'],
    darshanTimings: '06:00 AM to 09:00 PM',
    guidelines: 'No footwear inside the shrine and maintain cleanliness in the temple complex.',
    facilities: ['Cloak rooms', 'Dining halls', 'Guide services']
  },
  {
    id: 10,
    name: 'Golden Temple',
    city: 'Amritsar',
    state: 'Punjab',
    deity: 'Guru Granth Sahib',
    rating: 4.9,
    image: templeImages.golden,
    history: 'The Harmandir Sahib, or Golden Temple, is the spiritual center of Sikhism and welcomes visitors of all faiths.',
    rituals: ['Prabhat Pheri', 'Kirtan Darbar', 'Langar Seva'],
    darshanTimings: '24 hours daily',
    guidelines: 'Head must be covered, remove shoes, and maintain silence in inner sanctum.',
    facilities: ['Langar hall', 'Housing', 'Free meals']
  },
  {
    id: 11,
    name: 'Akshardham Temple',
    city: 'Delhi',
    state: 'Delhi',
    deity: 'Lord Swaminarayan',
    rating: 4.7,
    image: templeImages.akshardham,
    history: 'Akshardham is a modern temple complex celebrating Indian culture, spirituality, and architecture.',
    rituals: ['Aarti', 'Cultural exhibitions', 'Water show'],
    darshanTimings: '09:30 AM to 06:30 PM',
    guidelines: 'No photography in the main monument and no straw items inside.',
    facilities: ['Exhibition halls', 'Food court', 'Gift shop']
  },
  {
    id: 12,
    name: 'Shirdi Sai Baba Temple',
    city: 'Shirdi',
    state: 'Maharashtra',
    deity: 'Sai Baba',
    rating: 4.8,
    image: templeImages.shirdi,
    history: 'Shirdi is the home of Sai Baba and is known for its peaceful atmosphere and devotional services.',
    rituals: ['Mangala Aarti', 'Ramdass Athithi Aarti', 'Sai Aarti'],
    darshanTimings: '04:00 AM to 11:00 PM',
    guidelines: 'Follow the queue system and respect the holy precincts of the temple.',
    facilities: ['Accommodation', 'Dining hall', 'Wheelchair access']
  },
  {
    id: 13,
    name: 'Siddhivinayak Temple',
    city: 'Mumbai',
    state: 'Maharashtra',
    deity: 'Lord Ganesha',
    rating: 4.7,
    image: templeImages.siddhivinayak,
    history: 'Siddhivinayak Temple is one of Mumbai’s most famous Ganesha temples and attracts worshippers seeking success and blessings.',
    rituals: ['Sahasranam Archana', 'Maha Ganapati Aarti', 'Dhoop Aarti'],
    darshanTimings: '06:00 AM to 09:00 PM',
    guidelines: 'Use the special queue for VIP darshan and keep the temple premises clean.',
    facilities: ['Parking', 'Prasad shop', 'Restrooms']
  },
  {
    id: 14,
    name: 'Brihadeeswarar Temple',
    city: 'Thanjavur',
    state: 'Tamil Nadu',
    deity: 'Lord Shiva',
    rating: 4.8,
    image: templeImages.brihadeeswarar,
    history: 'Built by Raja Raja Chola I, this UNESCO World Heritage temple is celebrated for its massive vimana and Chola architecture.',
    rituals: ['Puja', 'Aarti', 'Festivals during Maha Shivaratri'],
    darshanTimings: '06:00 AM to 12:30 PM and 04:00 PM to 08:30 PM',
    guidelines: 'Preserve the historic site and refrain from touching the sculptures.',
    facilities: ['Guided tours', 'Restrooms', 'Parking']
  },
  {
    id: 15,
    name: 'Kailasanathar Temple',
    city: 'Kanchipuram',
    state: 'Tamil Nadu',
    deity: 'Lord Shiva',
    rating: 4.7,
    image: templeImages.kailasanathar,
    history: 'Kailasanathar Temple is one of Kanchipuram’s oldest temples, famous for its fine sandstone carvings and early Dravidian style.',
    rituals: ['Daily puja', 'Aarti', 'Navaratri celebrations'],
    darshanTimings: '06:00 AM to 12:00 PM and 04:00 PM to 08:30 PM',
    guidelines: 'Stay quiet during prayers and only carry essential belongings.',
    facilities: ['Guide services', 'Refreshment stalls', 'Parking']
  }
];

export const sacredSites = [
  ...topTemples,
  {
    id: 1001,
    name: 'Neelkanth Mahadev Temple',
    city: 'Rishikesh',
    state: 'Uttarakhand',
    deity: 'Lord Shiva',
    rating: 4.8,
    image: sacredSiteDefaultImage,
    history: 'Neelkanth Mahadev Temple is a revered Shiva shrine in the Garhwal Himalayas, known for its spiritual importance and the legend of Lord Shiva drinking poison.',
    rituals: ['Daily puja', 'Shivaratri celebrations', 'Temple aarti'],
    darshanTimings: 'Open daily; timings vary by season',
    guidelines: 'Wear comfortable clothes for the trek and respect temple customs.',
    facilities: ['Parking', 'Food stalls', 'Rest points'],
    type: 'temple'
  },
  {
    id: 1002,
    name: 'Jama Masjid',
    city: 'Delhi',
    state: 'Delhi',
    deity: 'Islamic worship',
    rating: 4.8,
    image: sacredSiteDefaultImage,
    history: 'Jama Masjid is one of the largest mosques in India and a prominent symbol of Mughal architecture in Delhi.',
    rituals: ['Friday prayers', 'Community worship', 'Special congregational prayers'],
    darshanTimings: 'Open for visitors daily; prayer timings vary',
    guidelines: 'Dress modestly, respect prayer times, and keep the mosque peaceful.',
    facilities: ['Prayer halls', 'Visitor entry', 'Guided access'],
    type: 'mosque'
  },
  {
    id: 1003,
    name: 'Golden Temple',
    city: 'Amritsar',
    state: 'Punjab',
    deity: 'Sikh worship',
    rating: 4.9,
    image: sacredSiteDefaultImage,
    history: 'The Harmandir Sahib, or Golden Temple, is the holiest shrine of Sikhism and welcomes visitors of all faiths.',
    rituals: ['Kirtan', 'Langar seva', 'Prabhat pheri'],
    darshanTimings: 'Open 24 hours daily',
    guidelines: 'Cover your head, remove shoes, and maintain silence inside the sanctum.',
    facilities: ['Langar hall', 'Accommodation', 'Free meals'],
    type: 'gurudwara'
  },
  {
    id: 1004,
    name: 'St. Paul\'s Cathedral',
    city: 'Kolkata',
    state: 'West Bengal',
    deity: 'Christian worship',
    rating: 4.7,
    image: sacredSiteDefaultImage,
    history: 'St. Paul\'s Cathedral is a historic Anglican cathedral known for its colonial-era architecture and spiritual significance.',
    rituals: ['Sunday service', 'Choir worship', 'Holy communion'],
    darshanTimings: 'Open during church hours; service timings vary',
    guidelines: 'Please keep the church quiet and respect worship services.',
    facilities: ['Seating area', 'Visitor access', 'Church events'],
    type: 'church'
  }
];

export const getTempleById = (id) => {
  const numericId = Number(id);
  return topTemples.find((temple) => temple.id === numericId || String(temple.id) === String(id));
};

export const getSacredSiteById = (id) => {
  const numericId = Number(id);
  return sacredSites.find((site) => site.id === numericId || String(site.id) === String(id));
};
