import React from "react";
import "./ContactUs.scss";

const ContactUs = () => {
  return (
    <section className="contact">
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>

      <div className="contact-container">
        {/* Contact Info Section */}
        <div className="contact-info">
          <h3>Connect with us</h3>
          <p>
            Questions, comments, or suggestions? Simply fill in the form, and
            we'll be in touch shortly.
          </p>
          <div className="contact-details">
            <p>📍 1054 Elkr Know Close, 71 New The South Side.</p>
            <p>📞 +234 816 990 615</p>
            <p>📧 Contact@yourmail.com</p>
          </div>
          <img src="/path-to-map-image.jpg" alt="Location map" className="map" />
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <form>
            <div className="form-group">
              <input type="text" placeholder="First Name*" required />
              <input type="text" placeholder="Last Name*" required />
            </div>
            <input type="email" placeholder="Email*" required />
            <input type="tel" placeholder="Phone number*" required />
            <textarea placeholder="Your message..." rows="4" required></textarea>
            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
