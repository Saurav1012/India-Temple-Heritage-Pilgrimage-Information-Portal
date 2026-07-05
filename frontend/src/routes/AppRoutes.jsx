import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";

import Footer from "../components/Footer/Footer";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/home";
import TempleList from "../pages/templelist/templelist";
import TempleDetails from "../pages/TempleDetails/TempleDetails";
import Festivals from "../pages/Festivals/Festivals";
import RoutesPage from "../pages/Routes/Routes";
import StatesPage from "../pages/States/States";
import StateDetailsPage from "../pages/StateDetails/StateDetails";
import Admin from "../pages/Admin/Admin";

// ✅ New Search Result Page
import SearchResult from "../pages/SearchResult/SearchResult";

const AppShell = () => {
  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        <Routes>
      
          {/* Home */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          {/* Search Result */}
          <Route
            path="/search-result"
            element={<SearchResult />}
          />

          {/* Temples */}
          <Route path="/temples" element={<TempleList />} />
          <Route path="/temples/:id" element={<TempleDetails />} />

          {/* Festivals */}
          <Route path="/festivals" element={<Festivals />} />

          {/* Pilgrimage Routes */}
          <Route path="/routes" element={<RoutesPage />} />

          {/* States */}
          <Route path="/states" element={<StatesPage />} />
          <Route path="/states/:slug" element={<StateDetailsPage />} />

         {/* Admin */}
<Route path="/admin" element={<Admin />} />

{/* About */}
<Route path="/about" element={<About />} />

{/* Contact */}
<Route path="/contact" element={<Contact />} />

{/* Default */}
<Route path="*" element={<Home />} />

        </Routes>
      </main>

      <Footer />
    </div>
  );
};

function AppRoutes() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default AppRoutes;