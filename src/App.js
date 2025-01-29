import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./mainComponent/AboutPage/AboutPage.js";
import LandingPage from "./mainComponent/LandingPage/LandingPage.js";
import "./styles.scss";
import PortfolioPage from './mainComponent/PortfolioPage/PortfolioPage.js';
import TestimonialPage from './mainComponent/TestimonialPage/TestimonialPage.js';
import ContactPage  from './mainComponent/ContactPage/ContactPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/AoutUs" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
