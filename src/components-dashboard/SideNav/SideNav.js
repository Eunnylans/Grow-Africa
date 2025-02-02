import React from "react";
import {
  FaChartPie,
  FaCog,
  FaHeadset,
  FaUniversity,
  FaWallet,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Imagemain from "../../ux-ux-designs/Tina-Edwards.png";
import "./SideNav.scss";

const SideNav = () => {
  return (
    <nav className="side-nav">
      <h2 className="logo">Cosmos</h2>
      <div className='top-links'>
        <p>Menu</p>
        <ul>
          <li>
            <NavLink
              to="/overview"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              <FaChartPie /> Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/investments-container"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              <FaUniversity /> Investments
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/wallet-container"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              <FaWallet /> Wallet
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="bottom-links">
        <NavLink to="/settings">
          <FaCog /> Settings
        </NavLink>
        <NavLink to="/support">
          <FaHeadset /> Help & Support
        </NavLink>
        <section className='tina-overview'>
        <div className="tina-image">
        <img src={Imagemain} className='tina-image'/>
        </div>
        <div className='tina-name-email'>
        <h4>Tina Edwards</h4>
        <p>tinaedwards@gmail.com</p>
      </div>
        </section>
      </div>
    </nav>
  );
};

export default SideNav;
