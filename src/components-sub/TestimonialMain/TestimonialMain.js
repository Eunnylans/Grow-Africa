import React from "react";
import "./TestimonialMain.scss";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO Company Name - Investor",
    text: "Pellentesque blandit ligula non venenatis dapibus. Maecenas eleifend metus ut velit iaculis ornare. Quisque commodo commodo tincidunt. Fusce eget ipsum tincidunt, viverra leo id, hendrerit ante. Nam malesuada id tellus ut ultrices.",
    image: "image1.jpg",
    color: "green",
  },
  {
    name: "John Doe",
    position: "CEO Company Name - Investor",
    text: "Pellentesque blandit ligula non venenatis dapibus. Maecenas eleifend metus ut velit iaculis ornare. Quisque commodo commodo tincidunt.",
    image: "image2.jpg",
    color: "yellow",
  },
  {
    name: "John Doe",
    position: "CEO Company Name - Investor",
    text: "Pellentesque blandit ligula non venenatis dapibus. Maecenas eleifend metus ut velit iaculis ornare.",
    image: "image3.jpg",
    color: "green",
  },
  {
    name: "John Doe",
    position: "CEO Company Name - Investor",
    text: "Pellentesque blandit ligula non venenatis dapibus. Maecenas eleifend metus ut velit iaculis ornare.",
    image: "image4.jpg",
    color: "yellow",
  },
];

const TestimonialMain = () => {
  return (
    <div className="testimonials">
      <section className="hero">
        <h1>Read what happy investors are saying</h1>
        <p>Join thousands of investors funding Nigeria’s agricultural growth while earning sustainable returns</p>
      </section>

      <section className="video-section">
        <div className="video-thumbnail">
          <button className="play-button">▶</button>
        </div>
        <blockquote>
          "Pellentesque blandit ligula non venenatis dapibus. Maecenas eleifend metus ut velit iaculis ornare."
        </blockquote>
      </section>

      <section className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`testimonial-card ${testimonial.color}`}>
            <img src={testimonial.image} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p className="position">{testimonial.position}</p>
            <p className="text">{testimonial.text}</p>
          </div>
        ))}
      </section>

      <section className="cta">
        <button className="investment-button">Begin Your Investment Journey Today →</button>
      </section>
    </div>
  );
};

export default TestimonialMain;