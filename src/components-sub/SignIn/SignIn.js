import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.scss";

const SignIn = () => {
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
    navigate("/dashboard"); // Redirect to the dashboard or home
  };

  return (
    <div className="signin-container">
      <div className="signin-image">
        <img src="" alt="" />
      </div>
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
              <input type="checkbox" /> Remember me
            </label>
            <a href="/auth-wrapper">Forgot Password?</a>
          </div>
          <button type="submit" className="btn">
            Sign In
          </button>
        </form>
        <p>
          Don’t have an account?{" "}
          <span onClick={() => navigate("/signup")}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};




export default SignIn;

