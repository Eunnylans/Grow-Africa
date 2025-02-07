import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <section className="hero">
      <h1>Funding Farmers, Harvesting Hope For The Future</h1>
      <p>
        Join thousands of investors funding Nigeria's agricultural growth while
        earning sustainable returns
      </p>
      <a href="/contact" className="cta-button">
        Begin Your Investment Journey <FaArrowRight size={20} color="white" />
      </a>
    </section>
  );
};

export default HeroSection;
