import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import SignIn from "./components-sub/SignIn/SignIn.js";
import SignUp from "./components-sub/SignUp/SignUp.js";
import AboutPage from "./mainComponent/AboutPage/AboutPage.js";
import ContactPage from "./mainComponent/ContactPage/ContactPage.js";
import LandingPage from "./mainComponent/LandingPage/LandingPage.js";
import PortfolioPage from "./mainComponent/PortfolioPage/PortfolioPage.js";
import TestimonialPage from "./mainComponent/TestimonialPage/TestimonialPage.js";
import AuthFlow from "./components-sub/Password/AuthFlow.js";
import Dashboard from "./components-dashboard/Dashboard/Dashboard.js"; // Import Dashboard
import ScrollToTopIcon from './components/ScrollToTopIcon/ScrollToTopIcon.js';

import "./styles.scss";

const App = () => {
  // Check if user is logged in
  const isAuthenticated = localStorage.getItem("user");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/testimonials" element={<TestimonialPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signup-container" element={<SignUp />} />
        <Route path="/signin-container" element={<SignIn />} />
        <Route path="/auth-wrapper" element={<AuthFlow />} />

        {/* Protected Dashboard Route */}
        <Route 
          path="/dashboard-container" 
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/signin-container" replace />} 
        />

        {/* Optional: Redirect to home if no route matches */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ScrollToTopIcon />
    </Router>
  );
};

export default App;


