import React from 'react';

const temples = [
  { id: 1, name: 'Kashi Vishwanath Temple', location: 'Varanasi, Uttar Pradesh' },
  { id: 2, name: 'Tirumala Venkateswara Temple', location: 'Tirupati, Andhra Pradesh' },
  { id: 3, name: 'Vaishno Devi Temple', location: 'Katra, Jammu & Kashmir' },
  { id: 4, name: 'Jagannath Temple', location: 'Puri, Odisha' },
  { id: 5, name: 'Somnath Temple', location: 'Prabhas Patan, Gujarat' },
  { id: 6, name: 'Kedarnath Temple', location: 'Uttarakhand' },
  { id: 7, name: 'Badrinath Temple', location: 'Uttarakhand' },
  { id: 8, name: 'Dwarkadhish Temple', location: 'Dwarka, Gujarat' },
  { id: 9, name: 'Meenakshi Amman Temple', location: 'Madurai, Tamil Nadu' },
  { id: 10, name: 'Golden Temple', location: 'Amritsar, Punjab' },
  { id: 11, name: 'Akshardham Temple', location: 'Delhi' },
  { id: 12, name: 'Shirdi Sai Baba Temple', location: 'Shirdi, Maharashtra' },
  { id: 13, name: 'Siddhivinayak Temple', location: 'Mumbai, Maharashtra' },
  { id: 14, name: 'Brihadeeswarar Temple', location: 'Thanjavur, Tamil Nadu' },
  { id: 15, name: 'Kailasanathar Temple', location: 'Kanchipuram, Tamil Nadu' },
  { id: 16, name: 'Ramanathaswamy Temple', location: 'Rameswaram, Tamil Nadu' },
  { id: 17, name: 'Konark Sun Temple', location: 'Konark, Odisha' },
  { id: 18, name: 'Lingaraja Temple', location: 'Bhubaneswar, Odisha' },
  { id: 19, name: 'Udupi Sri Krishna Temple', location: 'Udupi, Karnataka' },
  { id: 20, name: 'Guruvayur Temple', location: 'Guruvayur, Kerala' },
  { id: 21, name: 'Padmanabhaswamy Temple', location: 'Thiruvananthapuram, Kerala' },
  { id: 22, name: 'Sabarimala Ayyappa Temple', location: 'Kerala' },
  { id: 23, name: 'Mahakaleshwar Temple', location: 'Ujjain, Madhya Pradesh' },
  { id: 24, name: 'Omkareshwar Temple', location: 'Madhya Pradesh' },
  { id: 25, name: 'Nageshwar Jyotirlinga', location: 'Gujarat' },
  { id: 26, name: 'Ranganathaswamy Temple', location: 'Srirangam, Tamil Nadu' },
  { id: 27, name: 'Mallikarjuna Temple', location: 'Srisailam, Andhra Pradesh' },
  { id: 28, name: 'Bhadrachalam Temple', location: 'Telangana' },
  { id: 29, name: 'Akshardham Temple', location: 'Gandhinagar, Gujarat' },
  { id: 30, name: 'Virupaksha Temple', location: 'Hampi, Karnataka' },
  { id: 31, name: 'Chennakesava Temple', location: 'Belur, Karnataka' },
  { id: 32, name: 'Hoysaleswara Temple', location: 'Halebidu, Karnataka' },
  { id: 33, name: 'Kamakhya Temple', location: 'Guwahati, Assam' },
  { id: 34, name: 'Mahabodhi Temple', location: 'Bodh Gaya, Bihar' },
  { id: 35, name: 'Kalighat Temple', location: 'Kolkata, West Bengal' },
  { id: 36, name: 'Dakshineswar Kali Temple', location: 'Kolkata, West Bengal' },
  { id: 37, name: 'Gangaikondacholapuram Temple', location: 'Tamil Nadu' },
  { id: 38, name: 'Nellaiappar Temple', location: 'Tirunelveli, Tamil Nadu' },
  { id: 39, name: 'Kalahasti Temple', location: 'Andhra Pradesh' },
  { id: 40, name: 'Mysore Chamundeshwari Temple', location: 'Mysore, Karnataka' },
  { id: 41, name: 'Jagannath Temple', location: 'Ahmedabad, Gujarat' },
  { id: 42, name: 'Annamalaiyar Temple', location: 'Tiruvannamalai, Tamil Nadu' },
  { id: 43, name: 'Neminath Temple', location: 'Palitana, Gujarat' },
  { id: 44, name: 'Kashi Vishwanath Temple South', location: 'Varanasi, Uttar Pradesh' },
  { id: 45, name: 'Trimbakeshwar Temple', location: 'Nashik, Maharashtra' },
  { id: 46, name: 'Dwarkadhish Temple (second)', location: 'Dwarka, Gujarat' },
  { id: 47, name: 'Khajuraho Temple', location: 'Khajuraho, Madhya Pradesh' },
  { id: 48, name: 'Surya Temple', location: 'Konark, Odisha' },
  { id: 49, name: 'Birla Mandir', location: 'Hyderabad, Telangana' },
  { id: 50, name: 'Birla Mandir', location: 'Delhi' }
];

const RoutesPage = () => {
  return (
    <div className="container" style={{ padding: '40px 20px', minHeight: '80vh' }}>
      <div style={{ marginBottom: '30px' }}>
        <h1 className="page-header">Top 50 Indian Temples</h1>
        <p className="page-description" style={{ color: 'white' }}>
          Discover the most revered temples across India, each with a unique spiritual history and cultural significance.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
        {temples.map((temple) => (
          <div key={temple.id} style={{
            background: '#f09b1c',
            padding: '24px',
            borderRadius: '14px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            borderLeft: '5px solid #ffa726',
            color: 'white'
          }}>
            <h2 style={{ color: 'white', marginBottom: '12px', fontSize: '1.2rem' }}>{temple.name}</h2>
            <p style={{ color: 'white', lineHeight: '1.6' }}>📍 {temple.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoutesPage;
