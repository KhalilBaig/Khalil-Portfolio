import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode } from "react-icons/fa";
import "./LoadingScreen.css";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="loading-screen"
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="loading-content">
          <motion.div
            className="loading-icon-wrapper"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <FaCode className="loading-icon" />
          </motion.div>

          <h3 className="loading-brand">
            Khalil<span className="brand-dot">.dev</span>
          </h3>

          <p className="loading-subtitle">
            Frontend Engineer | React.js Developer ⭐⭐⭐⭐☆
          </p>

          <div className="loading-bar-container">
            <motion.div
              className="loading-bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <span className="loading-percentage">{progress}%</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
