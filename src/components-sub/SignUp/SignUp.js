import { useState } from "react";
import { FaEnvelope, FaIdCard, FaLock, FaUser } from "react-icons/fa";
import "./SignUp.scss";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    nin: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!formData.termsAccepted) {
      alert("You must accept the Terms of Use and Privacy Policy.");
      return;
    }

    // Store user data in local storage
    localStorage.setItem("user", JSON.stringify(formData));

    alert("Sign-up successful!");
    setFormData({
      fullName: "",
      email: "",
      nin: "",
      password: "",
      confirmPassword: "",
      termsAccepted: false,
    });
  };

  return (
    <div className="signup-container">
      <div className="signup-image">
        <img src="" alt="" />
      </div>
      <div className="signup-form">
        <h2>Start Your Investment Journey!</h2>
        <p>
          Sign up on Cosmos and start investing in sustainable farming today
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <FaUser className="icon" />
            <input
              type="text"
              name="fullName"
              placeholder="Enter Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <FaIdCard className="icon" />
            <input
              type="text"
              name="nin"
              placeholder="Enter NIN"
              value={formData.nin}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <FaLock className="icon" />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <FaLock className="icon" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Enter Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="terms">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />
            <span>
              By creating an account, I agree to our{" "}
              <a href="/terms">Terms of use</a> and{" "}
              <a href="/privacy">Privacy Policy</a>
            </span>
          </div>
          <button type="submit" className="signup-btn">
            Sign up
          </button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/signin-container">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
