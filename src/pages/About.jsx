import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { developerProfile, certificationsData } from "../data/portfolioData";
import {
  FaGraduationCap,
  FaBriefcase,
  FaAward,
  FaHeart,
  FaSmile,
  FaDownload,
  FaCheckCircle,
  FaCode,
} from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <div className="about-page section">
      <div className="container">
        {/* Page Header */}
        <div className="section-header">
          <span className="subtitle">My Journey</span>
          <h2>About Me & Engineering Philosophy</h2>
          <p>
            Learn more about my background, career story, core engineering
            values, and passions.
          </p>
        </div>

        {/* Profile Story & Photo Grid */}
        <div className="about-hero-grid">
          <motion.div
            className="about-image-card glass-panel"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/profile.png"
              alt="Talha Profile"
              className="about-photo"
            />
            <div className="about-photo-info">
              <h3>{developerProfile.name}</h3>
              <p>{developerProfile.title}</p>
              <NavLink to="/resume" className="btn-secondary resume-btn-small">
                <FaDownload /> Download Resume
              </NavLink>
            </div>
          </motion.div>

          <motion.div
            className="about-story-card glass-panel"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="story-title">
              Crafting Software That Leaves a Lasting Impression
            </h3>
            <p className="story-paragraph">
              With over 2 years of combined domain experience in compliance
              engineering, software development, and web design, I specialize in
              engineering high-end React.js applications with pixel perfection.
            </p>
            <p className="story-paragraph">
              I believe that software should be fast, elegant, accessible, and
              delightful to use. My approach combines rigorous architectural
              discipline with modern UI/UX design trends—such as glassmorphism,
              fluid micro-interactions, and responsive layouts.
            </p>

            <div className="story-highlights-grid">
              <div className="highlight-item">
                <FaCheckCircle className="hl-icon" />
                <div>
                  <strong>Frontend Architecture</strong>
                  <span>React.js, Hooks, Router DOM, Context API</span>
                </div>
              </div>
              <div className="highlight-item">
                <FaCheckCircle className="hl-icon" />
                <div>
                  <strong>Styling & Animations</strong>
                  <span>CSS Variables, Glassmorphism, Framer Motion</span>
                </div>
              </div>
              <div className="highlight-item">
                <FaCheckCircle className="hl-icon" />
                <div>
                  <strong>Modern AI Integration</strong>
                  <span>ChatGPT, GitHub Copilot, Prompt Engineering</span>
                </div>
              </div>
              <div className="highlight-item">
                <FaCheckCircle className="hl-icon" />
                <div>
                  <strong>Web Vitals & Performance</strong>
                  <span>Code splitting, lazy loading, sub-second LCP</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <div className="core-values-container">
          <div className="section-header">
            <span className="subtitle">Principles</span>
            <h2>Core Engineering Values</h2>
          </div>

          <div className="values-grid">
            {developerProfile.coreValues.map((value, idx) => (
              <div key={idx} className="value-card glass-panel">
                <div className="value-number">0{idx + 1}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications Timeline */}
        <div className="education-cert-grid">
          {/* Education */}
          <div className="edu-col glass-panel">
            <h3 className="sub-heading">
              <FaGraduationCap className="heading-icon" /> Education Timeline
            </h3>
            <div className="timeline-item">
              <span className="timeline-date">2019 - 2023</span>
              <h4>Bachelor of Engineering in Electronics Engineering</h4>
              <p className="timeline-institution">
                NED University of Engineering & Technology, Karachi
              </p>
              <p className="timeline-desc">
                Developed expertise in electronics, Robotics and programming
                while completing an Arduino-based rehabilitation exoskeleton
                project and learning modern web development with AI.
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="cert-col glass-panel">
            <h3 className="sub-heading">
              <FaAward className="heading-icon" /> Certifications & Honors
            </h3>
            <div className="cert-list">
              {certificationsData.map((cert, idx) => (
                <div key={idx} className="cert-item">
                  <FaAward className="cert-star" />
                  <div>
                    <h4>{cert.name}</h4>
                    <p>
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fun Facts & Personal Interests */}
        <div className="fun-facts-container glass-panel">
          <h3 className="sub-heading">
            <FaSmile className="heading-icon" /> Fun Facts & Personal Interests
          </h3>
          <div className="facts-grid">
            {developerProfile.funFacts.map((fact, idx) => (
              <div key={idx} className="fact-item">
                <FaHeart className="fact-heart" />
                <p>{fact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
