import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Investments from "../Investmentsmain/Investments";
import Overview from "../Overview/Overview";
import SideNav from "../SideNav/SideNav";
import Wallet from "../Wallet/Wallet";
import "./Dashboard.scss";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/signin-container");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/signin-container");
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar is always present */}
      <SideNav />
      <div className="content-area">
        <Routes>
          <Route path="/" element={<Overview />} /> {/* Default to Overview */}
          <Route path="overview" element={<Overview />} />
          <Route path="investments-container" element={<Investments />} />
          <Route path="wallet-container" element={<Wallet />} />
        </Routes>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
