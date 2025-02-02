import { useEffect, useRef } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import "./ContactUs.scss";

const ContactUs = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (window.google) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 40.712776, lng: -74.005974 }, // Example coordinates, replace with actual
        zoom: 14,
      });
      new window.google.maps.Marker({
        position: { lat: 40.712776, lng: -74.005974 },
        map,
      });
    }
  }, []);

  return (
    <section className="contact">
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Connect with us</h2>
          <p>
            Questions, comments, or suggestions? Simply fill in the form and
            we'll be in touch shortly.
          </p>
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <span>1234 Eric Moore close, TX, New Era South Side</span>
          </div>
          <div className="contact-item">
            <FaPhone className="icon" />
            <span>+234 789 910 70</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <span>Contact@companysite.com</span>
          </div>
          <div ref={mapRef} className="map"></div>
        </div>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <input type="text" placeholder="First Name" className="input" />
              <input type="text" placeholder="Last Name" className="input" />
            </div>
            <input type="email" placeholder="Email" className="input" />
            <input type="tel" placeholder="Phone Number" className="input" />
            <textarea
              placeholder="Your message..."
              className="textarea"
            ></textarea>
            <button className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
