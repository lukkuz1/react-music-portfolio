import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import MainPage from "../pages/Main/MainPage";
import Contact from "../pages/Main/Contact";
import { useAuth } from "../hooks/useAuth";
import "./MainNavigation.css";
import Rezervations from "../pages/Main/Rezervations";
import PriceList from "../pages/Main/PriceList";
import AddPhotos from "../pages/Main/AddPhoto";

export default function MainNavigation() {
  const { loggedIn, signOut } = useAuth(); // Get loggedIn state and signOut function
  const navigate = useNavigate(); // Use navigate for redirecting

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(); // Sign out the user
      navigate("/"); // Redirect to the home page or login page
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="tab-container">
      <div className="tabs">
        <TabLink to="/home" label="Pagrindinis puslapis" />
        <TabLink to="/contact" label="Kontaktai" />
        <TabLink to="/live-chat" label="Gyvas Pokalbis" /> {/* Link to LiveChat */}
        <TabLink to="/rezervations" label="Rezervacijos" /> {/* Link to PriceList */}
        <TabLink to="/add-photos" label="Pridėti Nuotraukas" /> {/* Link to AddPhotos */}
      </div>

      {/* If logged in, show the log out button */}
      {loggedIn && (
        <div className="logout-button-container">
          <button className="logout-button" onClick={handleLogout}>
            Atsijungti
          </button>
        </div>
      )}

      <div className="content">
        <Routes>
          <Route path="/home" element={<MainPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rezervations" element={<Rezervations />} /> {/* Route for LiveChat */}
          <Route path="/price-list" element={<PriceList />} /> {/* Route for PriceList */}
          <Route path="/add-photos" element={<AddPhotos />} /> {/* Route for AddPhotos */}
          <Route path="*" element={<MainPage />} />
        </Routes>
      </div>
    </div>
  );
}

// TabLink component to render individual tab
const TabLink = ({ to, label }: { to: string; label: string }) => {
  return (
    <Link to={to} className="tab">
      <div className="tab-label">{label}</div>
    </Link>
  );
};