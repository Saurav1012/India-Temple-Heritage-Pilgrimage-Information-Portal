import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";

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

// New Search Result Page
import SearchResult from "../pages/SearchResult/SearchResult";

// Authentication Pages Imports
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

// ✅ Protected Route Import
import ProtectedRoute from "../components/ProtectedRoute";

const AppShell = () => {
  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        <Routes>
          {/* Public Routes (Bina login ke bhi dikhenge) */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* 🔒 Protected Routes (Sirf Logged-in users ke liye) */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search-result"
            element={
              <ProtectedRoute>
                <SearchResult />
              </ProtectedRoute>
            }
          />
          <Route
            path="/temples"
            element={
              <ProtectedRoute>
                <TempleList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/temples/:id"
            element={
              <ProtectedRoute>
                <TempleDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/festivals"
            element={
              <ProtectedRoute>
                <Festivals />
              </ProtectedRoute>
            }
          />
          <Route
            path="/routes"
            element={
              <ProtectedRoute>
                <RoutesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/states"
            element={
              <ProtectedRoute>
                <StatesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/states/:slug"
            element={
              <ProtectedRoute>
                <StateDetailsPage />
              </ProtectedRoute>
            }
          />

          {/* 🔒 Admin Route (Sirf Admin role wale user ke liye) */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute adminOnly={true}>
                <Admin />
              </ProtectedRoute>
            }
          />

          {/* Default Route */}
          <Route path="*" element={<NotFound />} />
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