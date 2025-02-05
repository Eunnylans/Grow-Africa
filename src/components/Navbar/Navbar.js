import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    console.log("Menu toggled:", !isMenuOpen); // Debugging to ensure toggle works
  };

  // Close menu when a link is clicked (for mobile)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    console.log("Menu state updated:", isMenuOpen); // Ensure state updates
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="logo">Cosmos</div>

      {/* Hamburger Icon */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Overlay to close menu when clicked */}
      {isMenuOpen && (
        <div className="menu-overlay open" onClick={toggleMenu}></div>
      )}

      {/* Navigation Menu */}
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li onClick={closeMenu}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/about-us">About Us</NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/testimonials">Testimonials</NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        {/* Authentication Links */}
        <div className="auth-links">
          <button
            className="btn-in"
            onClick={() => {
              closeMenu();
              navigate("/signin-container");
            }}
          >
            Log in
          </button>
          <button
            className="btn-up"
            onClick={() => {
              closeMenu();
              navigate("/signup-container");
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
