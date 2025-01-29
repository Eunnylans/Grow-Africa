import React from "react";
import "./Navbar.scss";

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="logo">Cosmos</div>
        <ul className="nav-links">
          <li>About Us</li>
          <li>Portfolio</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
        <div className="auth-links">
          <button className="btn-in">Log in</button>
          <button className="btn-up">Sign Up</button>
        </div>
      </nav>
    );
  };
  
  export default Navbar;