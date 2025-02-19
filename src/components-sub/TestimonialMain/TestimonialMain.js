import React from "react";
import { FaArrowRight } from "react-icons/fa";
import investor1 from "../../ux-ux-designs/investor1.png";
import investor10 from "../../ux-ux-designs/investor10.png";
import {
  default as investor11,
  default as investor18,
} from "../../ux-ux-designs/investor11.png";
import investor12 from "../../ux-ux-designs/investor12.png";
import investor13 from "../../ux-ux-designs/investor13.png";
import investor14 from "../../ux-ux-designs/investor14.png";
import investor15 from "../../ux-ux-designs/investor15.png";
import investor16 from "../../ux-ux-designs/investor16.png";
import investor17 from "../../ux-ux-designs/investor17.png";
import investor2 from "../../ux-ux-designs/investor2.png";
import investor3 from "../../ux-ux-designs/investor3.png";
import investor4 from "../../ux-ux-designs/investor4.png";
import investor5 from "../../ux-ux-designs/investor5.png";
import investor6 from "../../ux-ux-designs/investor6.png";
import investor7 from "../../ux-ux-designs/investor7.png";
import investor8 from "../../ux-ux-designs/investor8.png";
import investor9 from "../../ux-ux-designs/investor9.png";


import investor19 from "../../ux-ux-designs/investor12.png";
import investor20 from "../../ux-ux-designs/investor13.png";
import investor21 from "../../ux-ux-designs/investor14.png";
import investor22 from "../../ux-ux-designs/investor15.png";
import investor23 from "../../ux-ux-designs/investor16.png";
import investor24 from "../../ux-ux-designs/investor17.png";
import investor25 from "../../ux-ux-designs/investor2.png";
import investor26 from "../../ux-ux-designs/investor3.png";
import investor27 from "../../ux-ux-designs/investor4.png";
import investor28 from "../../ux-ux-designs/investor5.png";
import playButton from "../../ux-ux-designs/Vector-play.png";

import image1 from "../../ux-ux-designs/rect1.png";
import image2 from "../../ux-ux-designs/rect2.png";
import image3 from "../../ux-ux-designs/rect3.png";
import image4 from "../../ux-ux-designs/rect4.png";
import image5 from "../../ux-ux-designs/rect5.png";
import image6 from "../../ux-ux-designs/rect6.png";

import "./TestimonialMain.scss";

const testimonials = [
  {
    id: 1,
    name: "Michael Johnson",
    position: "Founder & CEO - AgriTech Solutions",
    text: "Grow Africa invests in agricultural innovation, transforming farms with advanced solutions. We enhance productivity and drive sustainability. Our goal is to revolutionize agribusiness through impactful strategies. With technology-driven methods, we empower farmers and investors, ensuring sustainable growth in the sector.",
    image: image1,
    color: "green",
    quote: "“",
  },
  {
    id: 2,
    name: "Sophia Williams",
    position: "Managing Director - Green Harvest",
    text: "Our investments foster technological advancements, helping agribusinesses scale. We integrate sustainability with economic growth, creating long-term value.",
    image: image2,
    color: "yellow",
    quote: "“",
  },
  {
    id: 3,
    name: "David Smith",
    position: "Investor & Advisor - AgriFuture Ventures",
    text: "Grow Africa invests in agricultural innovation, transforming farms with advanced solutions. We enhance productivity and drive sustainability. Our goal is to revolutionize agribusiness through impactful strategies. With technology-driven methods, we empower farmers and investors, ensuring sustainable growth in the sector.",
    image: image3,
    color: "green",
    quote: "“",
  },
  {
    id: 4,
    name: "Emily Brown",
    position: "Head of Investments - AgriFund Global",
    text: "We support farmers and businesses through cutting-edge agricultural investments, ensuring high yields and economic progress.",
    image: image4,
    color: "yellow",
    quote: "“",
  },
  {
    id: 5,
    name: "James Anderson",
    position: "Executive Director - Sustainable Agri",
    text: "Grow Africa invests in agricultural innovation, transforming farms with advanced solutions. We enhance productivity and drive sustainability. Our goal is to revolutionize agribusiness through impactful strategies. With technology-driven methods, we empower farmers and investors, ensuring sustainable growth in the sector.",
    image: image5,
    color: "green",
    quote: "“",
  },
  {
    id: 6,
    name: "Olivia Martinez",
    position: "Agribusiness Consultant - Future Farms",
    text: "Grow Africa fosters agricultural success with technology-driven investments. We provide solutions that optimize productivity, supporting global food security and economic stability.",
    image: image6,
    color: "yellow",
    quote: "“",
  },
];

const investors = [
  investor1,
  investor2,
  investor3,
  investor4,
  investor5,
  investor6,
  investor7,
  investor8,
  investor9,
  investor10,
  investor11,
  investor12,
  investor13,
  investor14,
  investor15,
  investor16,
  investor17,
  investor18,

  investor19,
  investor20,
  investor21,
  investor22,
  investor23,
  investor24,
  investor25,
  investor26,
  investor27,
  investor28,
];

const renderImage = (src) => {
  if (typeof src === "string" && src.startsWith("data:")) {
    return src; // Base64 image
  } else {
    return src; // Static import (already resolved to a URL)
  }
};

//console.log(investors); // Check if array contains correct paths

const TestimonialMain = () => {
  return (
    <div className="testimonials">
      <div className="happy-investors">
        <div className="investors-container">
          {investors.map((investor, index) => {
            const randomX = Math.random() * 90 + "%"; // Random X position
            const randomY = Math.random() * 80 + "%"; // Random Y position

            return (
              <img
                key={index}
                src={renderImage(investor)} // Handle both formats
                alt={`Investor ${index + 1}`}
                className="investor-image"
                style={{ left: randomX, top: randomY }} // Random positioning
              />
            );
          })}
        </div>
        <div className="investors-info">
          <h1>Read what happy investors are saying</h1>
          <p>
            Join thousands of investors funding Nigeria's agricultural growth
            while earning sustainable returns.
          </p>
        </div>
      </div>

      <section className="video-section">
        <div className="video-thumbnail">
          {" "}
          <a
            href="https://youtu.be/5H9YY7VY10g"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="play-button" src={playButton} alt="Play Button" />
          </a>
        </div>
        <blockquote>
          "Grow Africa fosters innovation in agriculture through strategic
          investments. We empower growth by integrating technology and
          sustainability. Every venture enhances productivity, ensuring lasting
          impact. Our mission is to transform agribusiness, driving progress and
          resilience. With cutting-edge solutions, we cultivate success for
          farmers, businesses, and communities."
        </blockquote>
      </section>

      <section className="testimonials-cover">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <img src={testimonial.image} alt={testimonial.name} />
            <div className={`testimonial-card ${testimonial.color}`}>
              <h3>{testimonial.name}</h3>
              <p className="position">{testimonial.position}</p>
              <p className="text">{testimonial.text}</p>
              <p className="quote">{testimonial.quote}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="cta">
        <a href="/contact" className="cta-button">
          <span>Begin Your Investment Journey</span>
          <FaArrowRight size={18} color="white" />
        </a>
      </section>
    </div>
  );
};

export default TestimonialMain;
