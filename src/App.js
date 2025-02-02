import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignIn from "./components-sub/SignIn/SignIn.js";
import SignUp from "./components-sub/SignUp/SignUp.js";
import AboutPage from "./mainComponent/AboutPage/AboutPage.js";
import ContactPage from "./mainComponent/ContactPage/ContactPage.js";
import LandingPage from "./mainComponent/LandingPage/LandingPage.js";
import PortfolioPage from "./mainComponent/PortfolioPage/PortfolioPage.js";
import TestimonialPage from "./mainComponent/TestimonialPage/TestimonialPage.js";
import AuthFlow from './components-sub/Password/AuthFlow.js';
import "./styles.scss";

const App = () => {
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
      </Routes>
    </Router>
  );
};

export default App;
