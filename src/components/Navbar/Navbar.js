import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
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
      <div className={`menu-overlay ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}></div>

      {/* Navigation Menu */}
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li onClick={toggleMenu}>About Us</li>
          <li onClick={toggleMenu}>Portfolio</li>
          <li onClick={toggleMenu}>Testimonials</li>
          <li onClick={toggleMenu}>Contact</li>
        </ul>

        {/* Authentication Links */}
        <div className="auth-links">
          <button className="btn-in" onClick={toggleMenu}>Log in</button>
          <button className="btn-up" onClick={toggleMenu}>Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
