import { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Map from "../../components/Map/Map";
import "./ContactUs.scss";

const ContactUs = () => {
  const [notification, setNotification] = useState(null); // State to manage the notification

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5de07258-9363-40d2-9414-592bf143e92b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      // Clear the form data
      event.target.reset();

      // Show success notification
      setNotification("Your message has been sent to Grow Africa. We will get back to you as soon as possible.");
      
      // Hide notification after 5 seconds
      setTimeout(() => setNotification(null), 5000);
    } else {
      // Handle failure (optional)
      setNotification("There was an issue sending your message. Please try again.");
    }
  };

  //map
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
            <span>Bompai Rd, 700213, Kano, Nigeria</span>
          </div>
          <div className="contact-item">
            <FaPhone className="icon" />
            <span>+234 812 528 8367</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <span>partnership@growafrica.co</span>
          </div>
          <div ref={mapRef} className="map">
            <Map />
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="First Name"
                className="input"
                name="Name"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="input"
                name="LastName"
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="input"
              name="Email"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="input"
              name="Number1"
              required
            />
            <textarea
              placeholder="Your message..."
              className="textarea"
              name="Message"
              required
            ></textarea>
            <button className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>

      {/* Notification Popup */}
      {notification && (
        <div className="notification">
          <p>{notification}</p>
        </div>
      )}
    </section>
  );
};

export default ContactUs;
