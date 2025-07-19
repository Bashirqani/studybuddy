import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location.pathname]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
    localStorage.setItem("darkMode", !darkMode);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.removeItem("welcomeShown");
    setIsLoggedIn(false);
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <h1>StudyBuddy</h1>
      </div>
      <div className="nav-links">
        {!isLoggedIn ? (
          <>
            <Link to="/">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <Link to="/notes">Notes</Link>
            <Link to="/flashcards">Flashcards</Link>
            <button onClick={handleLogout}>Logout</button>
            <button className="dark-toggle" onClick={toggleDarkMode}>
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </>
        )}
      </div>
    </nav>
  );
}








