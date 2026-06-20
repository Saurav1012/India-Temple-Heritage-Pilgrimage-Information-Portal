import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import TempleCard from "../../components/TempleCard/TempleCard";
import Filters from "../../components/Filters/Filters";
import "./TempleList.css";

const templeData = [
  {
    id: 1,
    name: "Kashi Vishwanath",
    state: "Uttar Pradesh",
    city: "Varanasi",
    deity: "Shiva",
    festival: "Mahashivratri",
    popularity: 5,
    image: "https://via.placeholder.com/300"
  },
  {
    id: 2,
    name: "Tirupati Balaji",
    state: "Andhra Pradesh",
    city: "Tirupati",
    deity: "Vishnu",
    festival: "Brahmotsavam",
    popularity: 5,
    image: "https://via.placeholder.com/300"
  }
];

function TempleList() {
  const [search, setSearch] = useState("");

  const filteredTemples = templeData.filter((temple) =>
    temple.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="temple-list-page">
      <h1>Temple Directory</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <Filters />

      <div className="temple-grid">
        {filteredTemples.map((temple) => (
          <TempleCard key={temple.id} temple={temple} />
        ))}
      </div>
    </div>
  );
}

export default TempleList;