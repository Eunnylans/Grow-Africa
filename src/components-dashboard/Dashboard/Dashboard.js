import React, { useState } from "react";
import "./Dashboard.scss";
import SideNav from '../SideNav/SideNav';
import Overview from '../Overview/Overview';
import Investments from '../Investmentsmain/Investments';
import Wallet from '../Wallet/Wallet';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Overview");

  const renderComponent = () => {
    switch (activeTab) {
      case "Investments":
        return <Investments />;
      case "Wallet":
        return <Wallet />;
      default:
        return <Overview />;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated"); // Remove authentication flag
    navigate("/signin-container"); // Redirect to login
  };

  return (
    <div className="dashboard-container">
      <SideNav setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className="content-area">
        {renderComponent()}
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
