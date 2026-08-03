import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/portfolioData';
import { FaBriefcase, FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle, FaTools } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience-page section">
      <div className="container">
        {/* Page Header */}
        <div className="section-header">
          <span className="subtitle">Career Journey</span>
          <h2>Professional Work Experience</h2>
          <p>Detailed timeline of my roles in Frontend Development, Compliance Engineering, QA Testing, and Freelance technical projects.</p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="timeline-container">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              className="exp-timeline-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              {/* Header Top Bar with Title, Company, Badge & Dates cleanly aligned */}
              <div className="exp-card-top-bar">
                <div className="exp-title-block">
                  <div className="role-badge-row">
                    <h3>{exp.role}</h3>
                    <span className="exp-badge-type">{exp.type}</span>
                  </div>
                  <h4 className="company-name">
                    <FaBuilding className="icon-sm" /> {exp.company}
                  </h4>
                </div>

                <div className="exp-meta-block">
                  <span className="meta-item date-pill">
                    <FaCalendarAlt className="icon-sm" /> {exp.period}
                  </span>
                  <span className="meta-item location-pill">
                    <FaMapMarkerAlt className="icon-sm" /> {exp.location}
                  </span>
                </div>
              </div>

              <p className="exp-description">{exp.description}</p>

              <h4 className="highlights-heading">Key Responsibilities & Impact:</h4>
              <ul className="highlights-list">
                {exp.highlights.map((item, hIdx) => (
                  <li key={hIdx}>
                    <FaCheckCircle className="hl-check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="exp-tech-tags">
                <FaTools className="exp-tools-icon" />
                {exp.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
