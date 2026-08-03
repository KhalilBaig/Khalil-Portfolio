import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaExclamationCircle } from 'react-icons/fa';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page section">
      <div className="container">
        <motion.div
          className="not-found-card glass-panel"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="error-code-badge">
            <FaExclamationCircle />
            <span>Error 404</span>
          </div>

          <h1 className="not-found-title gradient-text">Page Not Found</h1>

          <p className="not-found-desc">
            The page or route you are attempting to access does not exist or has been moved. Let's get you back on track!
          </p>

          <NavLink to="/" className="btn-primary">
            <FaHome /> Return to Home
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
