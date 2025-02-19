import React from "react";
import { FaTwitter, FaLinkedin, FaFacebookF, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  //const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  //const day = String(currentDate.getDate()).padStart(2, '0');

  const formattedDate = `${year}`;
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
        <img src={`${process.env.PUBLIC_URL}/GROW_Logo_White_Transparent.svg`} alt="Logo" />
          <p>Invest in amazing agro opportunities that create more happy people in the world.</p>
          <div className="contact-info">
            <p><FaEnvelope />partnership@growafrica.co</p>
            <p><FaPhone />+234 812 528 8367</p>
          </div>
        </div>

        {/* Middle Sections */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>Investments</h4>
            <ul>
              <li>Cassava</li>
              <li>Plantain</li>
              <li>Maize <span className="new-badge">New</span></li>
              <li>Rice</li>
              <li>Yam tubers</li>
              <li>Millet</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Careers</li>
              <li>Investments</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
      <p>© {formattedDate} Grow Africa. All rights reserved.</p>
        <div className="social-icons">
          <FaTwitter />
          <FaLinkedin />
          <FaFacebookF />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
