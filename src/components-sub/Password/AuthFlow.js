import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import VerifyCode from './VerifyCode';
import ChangePassword from './ChangePassword';
import "./Auth.scss";


const AuthFlow = () => {
    const [step, setStep] = useState(1);
    const navigate = useNavigate(); // Hook to navigate to Sign-In Page
  
    return (
      <div className="auth-wrapper">
        {step === 1 && <ForgotPassword onNext={() => setStep(2)} />}
        {step === 2 && <VerifyCode onVerify={() => setStep(3)} />}
        {step === 3 && (
          <ChangePassword onComplete={() => navigate("/signin")} />
        )}
      </div>
    );
  };

export default AuthFlow
