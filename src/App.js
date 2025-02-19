import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Dashboard from "./components-dashboard/Dashboard/Dashboard.js"; // Import Dashboard
import Investments from "./components-dashboard/Investmentsmain/Investments.js";
import Overview from "./components-dashboard/Overview/Overview.js";
import Wallet from "./components-dashboard/Wallet/Wallet.js";
import ComingSoonPopup from "./components-sub/ComingSoonPopup/ComingSoonPopup.js";
import AuthFlow from "./components-sub/Password/AuthFlow.js";
import SignIn from "./components-sub/SignIn/SignIn.js";
import SignUp from "./components-sub/SignUp/SignUp.js";
import ScrollToTopIcon from "./components/ScrollToTopIcon/ScrollToTopIcon.js";
import AboutPage from "./mainComponent/AboutPage/AboutPage.js";
import ContactPage from "./mainComponent/ContactPage/ContactPage.js";
import LandingPage from "./mainComponent/LandingPage/LandingPage.js";
import PortfolioPage from "./mainComponent/PortfolioPage/PortfolioPage.js";
import TestimonialPage from "./mainComponent/TestimonialPage/TestimonialPage.js";

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
        <Route path="/coming-soon-backdrop" element={<ComingSoonPopup />} />{" "}
        {/* Catch-all 404 route */}
        {/* Protected Dashboard Route */}
        <Route
          path="/dashboard-container"
          element={
            isAuthenticated ? (
              <Dashboard />
            ) : (
              <Navigate to="/signin-container" replace />
            )
          }
        />
        {/* Optional: Redirect to home if no route matches */}
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/investments-container" element={<Investments />} />
        <Route path="/wallet-container" element={<Wallet />} />
      </Routes>
      <ScrollToTopIcon />
    </Router>
  );
};

export default App;
