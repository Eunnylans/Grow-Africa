import React from "react";
import "./Testimonials.scss";
import John from "../../ux-ux-designs/Testimonial1.png";
import Obinna from "../../ux-ux-designs/Testimonial2.png";
import Chika from "../../ux-ux-designs/Testimonial3.png";

const testimonials = [
  {
    name: "John Adedeji",
    message: "Cosmos Agritech transformed my farming business!",
    date: "24 August 2024",
    image: John // Replace with actual image
  },
  {
    name: "Obinna John",
    message: "I'm grateful for the support from Cosmos.",
    date: "24 August 2024",
    image: Obinna // Replace with actual image
  },
  {
    name: "Chika Nwosu",
    message: "Investing Cosmos was a game changer in the agric sector",
    date: "17 December 2024",
    image: Chika, // Replace with actual image
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <h2>Testimonials</h2>
        <p>Stories of Growth Through Funding</p>
      </div>
      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={testimonial.name} />
            <div className="testimonial-content">
              <h3>{testimonial.name}</h3>
              <p>{testimonial.message}</p>
              <span>{testimonial.date}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="see-more">
        <a href="#">See More &gt;</a>
      </div>
    </section>
  );
};

export default Testimonials;
