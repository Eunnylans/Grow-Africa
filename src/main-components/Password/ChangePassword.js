import React, { useState } from "react";
import "./Auth.scss";

const ChangePassword = ({ onComplete }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleReset = () => {
    if (password === confirmPassword) {
      localStorage.setItem("userPassword", password);
      onComplete();
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className="mainauth-container">
      <div className="changepassword-image">
        <img src="" alt="" />
      </div>
      <div className='auth-container'>
        <h2>Change Password!</h2>
        <input
          type="password"
          placeholder="Enter New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handleReset}>Reset Password</button>
      </div>
    </div>
  );
};

export default ChangePassword;
