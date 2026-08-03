import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialsData } from '../data/portfolioData';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import './TestimonialsCarousel.css';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <div className="testimonials-widget">
      <div className="carousel-card glass-panel">
        <FaQuoteLeft className="quote-icon" />

        <div className="carousel-body">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rating-stars">
                {[...Array(current.rating)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>

              <p className="testimonial-text">"{current.text}"</p>

              <div className="author-info">
                <img src={current.avatar} alt={current.name} className="author-avatar" />
                <div>
                  <h4 className="author-name">{current.name}</h4>
                  <p className="author-role">{current.role} • {current.company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="carousel-controls">
          <button onClick={handlePrev} className="carousel-arrow" aria-label="Previous Testimonial">
            <FaChevronLeft />
          </button>
          <div className="carousel-dots">
            {testimonialsData.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
          <button onClick={handleNext} className="carousel-arrow" aria-label="Next Testimonial">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
