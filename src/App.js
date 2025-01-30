import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./mainComponent/AboutPage/AboutPage.js";
import LandingPage from "./mainComponent/LandingPage/LandingPage.js";
import Navbar from './components/Navbar/Navbar.js';
import "./styles.scss";
import PortfolioPage from './mainComponent/PortfolioPage/PortfolioPage.js';
import TestimonialPage from './mainComponent/TestimonialPage/TestimonialPage.js';
import ContactPage  from './mainComponent/ContactPage/ContactPage.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/testimonials" component={TestimonialPage} />
        <Route path="/contact" component={ContactPage} />
      </Routes>
    </Router>
  );
};

export default App;