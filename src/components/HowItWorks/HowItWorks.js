import React from "react";
import "./HowItWorks.scss";

// Import images correctly (ensure the paths are correct in your project)
import backgroundImg from "../../ux-ux-designs/41.png";
import browseImg from "../../ux-ux-designs/image.png";
import signupImg from "../../ux-ux-designs/image1.png";
import investImg from "../../ux-ux-designs/image2.png";
import returnsImg from "../../ux-ux-designs/image3.png";

const steps = [
  {
    title: "Browse Projects",
    description: "Discover various agricultural projects available for investment",
    image: browseImg,
  },
  {
    title: "Sign Up to Invest",
    description: "Create an account to start supporting local farmers",
    image: signupImg,
  },
  {
    title: "Invest in Local Farmers",
    description: "Choose a project and invest in a sustainable future",
    image: investImg,
  },
  {
    title: "Earn Returns",
    description: "Receive returns while making a possible impact on communities",
    image: returnsImg,
  },
];



const HowItWorks = () => {
  return (
    <div className="how-it-works" >
    <div className='container'>
      <h2 className="section-title">How It Works</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <img src={step.image} alt={step.title} className="step-image" />
            <div className="step-text">
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default HowItWorks;
