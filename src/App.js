import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./mainComponent/AboutPage/AboutPage.js";
import ContactPage from "./mainComponent/ContactPage/ContactPage.js";
import LandingPage from "./mainComponent/LandingPage/LandingPage.js";
import PortfolioPage from "./mainComponent/PortfolioPage/PortfolioPage.js";
import TestimonialPage from "./mainComponent/TestimonialPage/TestimonialPage.js";
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
      </Routes>
    </Router>
  );
};

export default App;
