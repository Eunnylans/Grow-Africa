import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    console.log("Menu Open:", !isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    console.log("Menu Closed");
  };

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/GROW Logo.svg`} alt="Logo" />
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Overlay to close menu when clicked */}
      {isMenuOpen && (
        <div className="menu-overlay open" onClick={closeMenu}></div>
      )}

      {/* Navigation Menu */}
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" onClick={closeMenu}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" onClick={closeMenu}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/testimonials" onClick={closeMenu}>
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
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
