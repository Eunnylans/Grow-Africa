import React from "react";
import "./CTASection.scss";
import farmingImage from "../../ux-ux-designs/cta-image.png"; 

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-image">
          <img src={farmingImage} alt="Farmers working in the field" />
        </div>
        <div className="cta-content">
          <h2>Invest in Agriculture. Grow Your Wealth!</h2>
          <p>Support farmers, earn returns, and make a difference today.</p>
          <a href="/contact" className="cta-button">Contact Us Now</a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
