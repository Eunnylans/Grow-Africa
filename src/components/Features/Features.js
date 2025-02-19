import React from "react";
import Image from "../../ux-ux-designs/Feature.png"; // Correct import syntax for the image
import "./Features.scss";

const Features = () => {
  return (
    <section className="features">
      <div className="feature-left">
        <div className="inner-up">
          <h2>Empowering Agriculture, Enriching Lives!</h2>
          <p className="paragraph">
            At Grow Afica, we bridge the gap between investors and farmers. Your
            funding empowers local farmers to grow high-potential crops,
            increase yields, and contribute to food security
          </p>
        </div>
        <div className="inner-down">
          <h4> Key Benefits</h4>
          <ul>
            <li><i className="fa fa-seedling" aria-hidden="true"></i>Invest in sustainable agriculture with confidence</li>
            <li><i className="fa fa-leaf" aria-hidden="true"></i>Support small-scale farmers and rural communities.</li>
            <li><i className="fa fa-hand-holding-usd" aria-hidden="true"></i>Earn competitive returns while making an impact.</li>
          </ul>
        </div>
      </div>
      <div className="feature-right">
        <img src={Image} alt="Feature Image" />
      </div>
    </section>
  );
};

export default Features;
