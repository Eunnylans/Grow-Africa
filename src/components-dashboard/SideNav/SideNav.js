import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaChartPie,
  FaCog,
  FaHeadset,
  FaTimes,
  FaUniversity,
  FaWallet,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Imagemain from "../../ux-ux-designs/Tina-Edwards.png";
import "./SideNav.scss";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log("SideNav Mounted");
  }, []);

  return (
    <>
      {/* Hamburger Button */}
      <button className="hamburger" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar Navigation */}
      <nav className={`side-nav ${isOpen ? "open" : ""}`}>
        <div className="logo">
          <a href="/" style={{ textDecoration: "none" }}>
            <img src={`${process.env.PUBLIC_URL}/GROW Logo.svg`} alt="Logo" />
          </a>
        </div>

        <div className="top-links">
          <p>Menu</p>
          <ul>
            <li>
              <NavLink
                to="/overview"
                className={({ isActive }) => (isActive ? "isActive" : "")}
                onClick={() => {
                  toggleSidebar();
                }}
              >
                <FaChartPie /> Overview
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/investments-container"
                className={({ isActive }) => (isActive ? "isActive" : "")}
                onClick={() => {
                  toggleSidebar();
                }}
              >
                <FaUniversity /> Investments
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/wallet-container"
                className={({ isActive }) => (isActive ? "isActive" : "")}
                onClick={() => {
                  toggleSidebar();
                }}
              >
                <FaWallet /> Wallet
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="bottom-links">
          <NavLink to="/settings" onClick={toggleSidebar}>
            <FaCog /> Settings
          </NavLink>
          <NavLink to="/support" onClick={toggleSidebar}>
            <FaHeadset /> Help & Support
          </NavLink>

          <section className="tina-overview">
            <div className="tina-image">
              <img src={Imagemain} alt="Tina Edwards" className="tina-image" />
            </div>
            <div className="tina-name-email">
              <h4>Tina Edwards</h4>
              <p>tinaedwards@gmail.com</p>
            </div>
          </section>
        </div>
      </nav>
    </>
  );
};

export default SideNav;
