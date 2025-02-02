import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom"; // Import NavLink for navigation
import "./Navbar.scss";

const Navbar = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // ✅ Correctly toggling state
  };

  useEffect(() => {
    console.log("Menu state updated:", isMenuOpen); // ✅ Logs the correct state
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="logo">Cosmos</div>

      {/* Hamburger Icon */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Overlay to close menu when clicked */}
      <div
        className={`menu-overlay ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      ></div>

      {/* Navigation Menu */}
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li onClick={toggleMenu}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Home
            </NavLink>
          </li>
          <li onClick={toggleMenu}>
            <NavLink
              to="/about-us"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              About Us
            </NavLink>
          </li>
          <li onClick={toggleMenu}>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Portfolio
            </NavLink>
          </li>
          <li onClick={toggleMenu}>
            <NavLink
              to="/testimonials"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Testimonials
            </NavLink>
          </li>
          <li onClick={toggleMenu}>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Authentication Links */}
        <div className="auth-links">
          <button
            className="btn-in"
            onClick={() => navigate("/signin-container")}
          >
            Log in
          </button>
          <button
            className="btn-up"
            onClick={() => navigate("/signup-container")}
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
