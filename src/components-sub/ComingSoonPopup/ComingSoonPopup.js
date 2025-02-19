import { Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ComingSoonPopup.scss";

const SEVEN_DAYS_IN_SECONDS = 7 * 24 * 60 * 60; // 7 days in seconds

export default function ComingSoonPopup() {
  const [showPopup, setShowPopup] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(SEVEN_DAYS_IN_SECONDS);
  const navigate = useNavigate();

  useEffect(() => {
    const storedTimestamp = localStorage.getItem("popupStartTime");
    let startTime = storedTimestamp
      ? parseInt(storedTimestamp, 10)
      : Date.now();

    if (!storedTimestamp) {
      localStorage.setItem("popupStartTime", startTime.toString());
    }

    const updateRemainingTime = () => {
      const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
      const newTimeRemaining = Math.max(SEVEN_DAYS_IN_SECONDS - elapsedTime, 0);
      setTimeRemaining(newTimeRemaining);

      if (newTimeRemaining === 0) {
        setShowPopup(false);
      }
    };

    updateRemainingTime();
    const interval = setInterval(updateRemainingTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (timeInSeconds: number) => {
    const days = Math.floor(timeInSeconds / (24 * 3600));
    const hours = Math.floor((timeInSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${days} days ${String(hours).padStart(2, "0")} hours ${String(
      minutes
    ).padStart(2, "0")} minutes ${String(seconds).padStart(
      2,
      "0"
    )} seconds remaining`;
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  if (!showPopup) return null;

  return (
    <div className="coming-soon-backdrop">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="coming-soon-popup"
      >
        <Card className="coming-soon-popup-card">
          <CardContent className="text-center">
            <h2 className="coming-soon-popup">Coming Soon</h2>
            <p className="coming-soon-popup">
              We're working on this feature. Stay tuned!
            </p>
            <div className="countdown-timer">
              <p>{formatTime(timeRemaining)}</p>
            </div>
            <a onClick={handleBackToHome} className="back-to-home-button">
              Back to Home
            </a>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
