import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./SignIn.scss";

const SignIn = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      !storedUser ||
      storedUser.email !== formData.email ||
      storedUser.password !== formData.password
    ) {
      alert("Invalid credentials! Please try again.");
      return;
    }

    alert("Login successful!");
    localStorage.setItem("isAuthenticated", "true"); // Store authentication flag
    navigate("/dashboard-container"); // Redirect to Dashboard
  };

  return (
    <div className="signin-container">
      <Navbar />
      <div className="signin-image"></div>
      <div className="auth-form">
        <h2>Welcome Back!</h2>
        <p>Sign in to unlock investment opportunities</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <div className="auth-options">
            <label>
            <input
            type="checkbox"
            id="custom-checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={(e) => {
              handleChange(e);
              setIsClicked(e.target.checked);
            }}
          />
              <label
                htmlFor="custom-checkbox"
                className={isClicked ? "checked" : ""}
              ></label><span> Remember me</span>
            </label>
            <a href="/auth-wrapper">Forgot Password?</a>
          </div>
          <button type="submit" className="btn">
            Sign In
          </button>
        </form>
        <div className="login-link">
          <p>
            Don’t have an account?{" "}
            <span onClick={() => navigate("/signup-container")}>Sign Up</span>
          </p>
          <a href="/">
            {" "}
            <FaArrowLeft size={20} color="#6b8e23" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
