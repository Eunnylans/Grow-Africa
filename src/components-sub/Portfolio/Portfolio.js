import React from "react";
import "./Portfolio.scss";
import { FaChartLine, FaBriefcase, FaShieldAlt } from "react-icons/fa";
import port1 from "../../ux-ux-designs/port1.png";
import port2 from "../../ux-ux-designs/port2.png";
import port3 from "../../ux-ux-designs/port3.png";

import port4 from "../../ux-ux-designs/port4.png";
import port5 from "../../ux-ux-designs/port5.png";
import port6 from "../../ux-ux-designs/port6.png";

import investmentImage from "../../ux-ux-designs/port7.png";

const Portfolio = () => {


  const features = [
    {
      icon: <FaChartLine />,
      title: "High Return",
      description: "Competitive ROI for agricultural investment",
    },
    {
      icon: <FaBriefcase />,
      title: "Diversified Portfolio",
      description: "Multiple crop types and investment option",
    },
    {
      icon: <FaShieldAlt />,
      title: "Transparency",
      description: "Regular updates and clear reporting",
    },
  ];

  const investments = [
    {
      id: 1,
      image: port1, // Replace with actual image path
      title: "Premium Plantain Farm",
      location: "Lagos, Nigeria",
      minInvestment: "₦70,000",
      roi: "25%",
      status: "Open",
    },
    {
      id: 2,
      image: port2,
      title: "Maize Farming Initiative",
      location: "Benin, Nigeria",
      minInvestment: "₦50,000",
      roi: "28%",
      status: "Open",
    },
    {
      id: 3,
      image: port3,
      title: "Rice Farming Initiative",
      location: "Kaduna, Nigeria",
      minInvestment: "₦100,000",
      roi: "25%",
      status: "Open",
    },
  ];


  const pastInvestments = [
    {
      id: 1,
      image: port4, // Replace with actual image path
      title: "Maize Farm Project",
      location: "Kaduna, Nigeria",
      date: "Jan – April 2024",
      roi: "+24%",
    },
    {
      id: 2,
      image: port5,
      title: "Rice Farm Project",
      location: "Ondo, Nigeria",
      date: "May – June 2024",
      roi: "+20%",
    },
    {
      id: 3,
      image: port6,
      title: "Poultry Farm Project",
      location: "Kaduna, Nigeria",
      date: "August – December 2024",
      roi: "+25%",
    },
  ];
  

  

  return (
    <div className="portfolio">
      <section className="hero">
        <h1>Portfolio</h1>
      </section>

     <section className="why-choose-cosmos">
      <h2>Why choose Grow Africa?</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="investment-section">
    <h2>Current Investment Opportunities</h2>
    <div className="investment-container">
      {investments.map((investment) => (
        <div className="investment-card" key={investment.id}>
          <img src={investment.image} alt={investment.title} />
          <div className="investment-details">
            <h3>{investment.title}</h3>
            <p><strong>Location:</strong> {investment.location}</p>
            <p><strong>Min Investment:</strong> {investment.minInvestment}</p>
            <p><strong>ROI:</strong> {investment.roi}</p>
            <p><strong>Status:</strong> {investment.status}</p>
            <button className="view-detail">View Detail</button>
          </div>
        </div>
      ))}
    </div>
    <div className="see-more">
        <a href="/">See More &gt;</a>
      </div>
  </section>

  <section className="past-investment-section">
  <h2>Past Investment Opportunities</h2>
  <div className="past-investment-container">
    {pastInvestments.map((investment) => (
      <div className="past-investment-card" key={investment.id}>
        <img src={investment.image} alt={investment.title} />
        <div className="investment-info">
          <p className="investment-date">{investment.date}</p>
          <h3>{investment.title}</h3>
          <p className="investment-location">{investment.location}</p>
          <p className="investment-roi"><strong>ROI {investment.roi}</strong></p>
        </div>
      </div>
    ))}
  </div>
</section>

<div className="investment-strategy">
<div className="content">
  <h2>Our Investment Strategy</h2>
  <p>
    At Grow Africa, we prioritize key investment strategies for the
    profitability of both investors and farmers
  </p>
  <div className="strategies">
    <h3>Key Strategies</h3>
    <ul>
      <li>
        <span className="icon">&#128279;</span> Focus on high demand crops
      </li>
      <li>
        <span className="icon">&#128279;</span> Strategic farm location
      </li>
      <li>
        <span className="icon">&#128279;</span> Modern farming techniques
      </li>
    </ul>
  </div>
</div>
<div className="image-container">
  <img src={investmentImage} alt="Farmer with harvest" />
</div>
</div>
    </div>
  );
};

export default Portfolio;
