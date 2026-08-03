import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const totalScroll = documentHeight - windowHeight;
      if (totalScroll > 0) {
        setScrollPercentage((scrollTop / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '3px',
      zIndex: 1001,
      pointerEvents: 'none',
      background: 'transparent'
    }}>
      <motion.div
        style={{
          height: '100%',
          width: `${scrollPercentage}%`,
          background: 'linear-gradient(90deg, #7C3AED 0%, #14B8A6 50%, #F59E0B 100%)',
          boxShadow: '0 0 10px rgba(124, 58, 237, 0.8)'
        }}
      />
    </div>
  );
};

export default ScrollProgress;
