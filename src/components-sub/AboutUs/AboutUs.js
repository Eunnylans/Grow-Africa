import React, { useEffect, useState } from "react";
import Image1 from "../../ux-ux-designs/About1.png";
import Image3 from "../../ux-ux-designs/About3.png";
import Image2 from "../../ux-ux-designs/About4.png";
import "./AboutUs.scss"; // Import your SCSS file for styling

import mission1 from "../../ux-ux-designs/mission1.png";
import mission2 from "../../ux-ux-designs/mission2.png";
import mission3 from "../../ux-ux-designs/mission3.png";

const missionData = [
  {
    title: "Empower Farmers",
    description: "Empower farmers through technology and collaboration",
    image: mission1,
  },
  {
    title: "Connect Investors",
    description: "Connect investors with sustainable agriculture projects",
    image: mission2,
  },
  {
    title: "Build the Future",
    description: "Build a sustainable future for agriculture and communities",
    image: mission3,
  },
];

const impactData = [
  { number: 500, label: "Farmers Empowered" },
  { number: 10, label: "Hectares Cultivated", suffix: "k+" },
  { number: 5, label: "Happy Investors", suffix: "k+" },
  { number: 70, label: "Ton Harvested", suffix: "k" },
];

const Counter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 20000; // Duration in milliseconds
    const stepTime = Math.abs(Math.floor(duration / end));

    if (end < 1) {
      setCount(end);
      return;
    }

    const timer = setInterval(() => {
      start += Math.ceil(end / 100);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const AboutUs = () => {
  return (
    <section className="about-us">
      {/*HERO SECTION*/}

      <div className="hero-section">
        <h1>About Us</h1>
      </div>

      {/*ABOUT SECTION*/}

      <div className="content">
        <div className="about-content">
          <div className="about-content-up">
            <h2 className="section-title">How it all Began</h2>
            <p className="subtitle">Our Story</p>
            <p className="story-text">
              Cosmos Agritech, founded in [Year], is revolutionizing Nigerian
              agriculture. We connect smallholder farmers with investors,
              empowering them to increase yields, improve livelihoods, and
              protect the environment. Key milestones include our first major
              partnership with [Partner's Name] in [Year] and the launch of our
              innovative platform in [Year], connecting [Number] farmers. By
              investing in Cosmos Agritech, you're not just supporting a
              business, but the future of Nigerian agriculture.
            </p>
          </div>

          <div className="about-image">
            <div className="img-container">
              <img
                src={Image2}
                alt="Farmer in greenhouse"
                className="img-main"
              />
              <img
                src={Image1}
                alt="Farmer carrying produce"
                className="img-small"
              />
            </div>
          </div>
        </div>
      </div>

      {/*AGRITECH SECTION*/}

      <div className="about-section">
        <div className="about-content">
          <div className="about-images">
            <div className="background-shape"></div> {/* Keep this separate */}
            <img src={Image3} alt="Farmer smiling" className="main-image" />
            {/*<img src={Image1} alt="Farmer in field" className="overlay-image" />*/}
          </div>

          <div className="about-text">
            <h2 className="title">Meet Cosmos AgriTech</h2>
            <h3 className="subtitle">“WHO WE ARE”</h3>
            <p className="description">
              Cosmos Agritech connects investors with smallholder farmers,
              driving food security and sustainable growth through impactful
              agricultural investments.
            </p>
            <h3 className="subtitle">“WHAT WE DO”</h3>
            <p className="description">
              We empower smallholder farmers by providing them with access to
              funding and resources, enabling them to cultivate crops, increase
              yields, and improve livelihoods. Through our platform, investors
              can support sustainable agriculture while earning returns,
              fostering a stronger and more resilient agricultural sector.
            </p>
          </div>
        </div>
      </div>

      {/*MISSION SECTION*/}

      <section className="mission">
        <h2 className="mission-title">Mission</h2>
        <div className="mission-cards">
          {missionData.map((item, index) => (
            <div className="mission-card" key={index}>
              <img src={item.image} alt="" className="mission-image" />
              <div className="mission-content">
                <h3 className="mission-heading">{item.title}</h3>
                <p className="mission-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*IMPACT SECTION*/}

      <section className="impact">
        <h2 className="impact-title">Impact in Numbers</h2>
        <div className="impact-grid">
          {impactData.map((item, index) => (
            <div className="impact-item" key={index}>
              <h3 className="impact-number">
                <Counter value={item.number} suffix={item.suffix} />
              </h3>
              <p className="impact-label">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
