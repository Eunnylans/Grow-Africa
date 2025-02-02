import React, { useState } from "react";
import "./Auth.scss";

const VerifyCode = ({ onVerify }) => {
  const [code, setCode] = useState("".padStart(6, " "));
  return (
    <div className="mainauth-container">
      <div className="changepassword-image">
        <img src="" alt="" />
      </div>
      <div className='auth-container'>
        <h2>Forgot Password?</h2>
        <div className="code-input">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength="1"
              value={code[i] || ""}
              onChange={(e) => {
                let newCode = code.split("");
                newCode[i] = e.target.value;
                setCode(newCode.join(""));
              }}
            />
          ))}
        </div>
        <button onClick={() => onVerify(code)}>Verify</button>
      </div>
    </div>
  );
};

export default VerifyCode;
