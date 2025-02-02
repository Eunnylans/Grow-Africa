import React from "react";
import { NavLink } from "react-router-dom";
import { FaChartPie, FaUniversity, FaWallet, FaCog, FaHeadset } from "react-icons/fa";
import "./SideNav.scss";

const SideNav = () => {
  return (
    <nav className="side-nav">
      <h2 className="logo">Cosmos</h2>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            <FaChartPie /> Overview
          </NavLink>
        </li>
        <li>
          <NavLink to="/investments" className={({ isActive }) => (isActive ? "active" : "")}>
            <FaUniversity /> Investments
          </NavLink>
        </li>
        <li>
          <NavLink to="/wallet" className={({ isActive }) => (isActive ? "active" : "")}>
            <FaWallet /> Wallet
          </NavLink>
        </li>
      </ul>
      <div className="bottom-links">
        <NavLink to="/settings">
          <FaCog /> Settings
        </NavLink>
        <NavLink to="/support">
          <FaHeadset /> Help & Support
        </NavLink>
      </div>
    </nav>
  );
};

export default SideNav;
