import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // Import Link for navigation
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
            <Link to="/">Home</Link>
          </li>{" "}
          {/* Link added */}
          <li onClick={toggleMenu}>
            <Link to="/about-us">About Us</Link>
          </li>{" "}
          {/* Link added */}
          <li onClick={toggleMenu}>
            <Link to="/portfolio">Portfolio</Link>
          </li>{" "}
          {/* Link added */}
          <li onClick={toggleMenu}>
            <Link to="/testimonials">Testimonials</Link>
          </li>{" "}
          {/* Link added */}
          <li onClick={toggleMenu}>
            <Link to="/contact">Contact</Link>
          </li>{" "}
          {/* Link added */}
        </ul>

        {/* Authentication Links */}
        <div className="auth-links">
          <button className="btn-in" onClick={() => navigate("/signin-container")}>
            Log in
          </button>
          <button className="btn-up" onClick={() => navigate("/signup-container")}>
          Sign Up
        </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
