import React, { useState } from "react";
import "./Auth.scss";

const ForgotPassword = ({ onNext }) => {
  const [email, setEmail] = useState("");
  return (
    <div className="mainauth-container">
    <div className="changepassword-image">
    <img src="" alt="" />
  </div>
      <div className='auth-container'>
      <h2>Forgot Password?</h2>
      <input
        type="email"
        placeholder="Enter Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={() => onNext(email)}>Continue</button>
      </div>
    </div>
  );
};

export default ForgotPassword;

