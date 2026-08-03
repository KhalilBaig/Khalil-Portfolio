import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import { FaCode, FaTools, FaRobot, FaCheckCircle, FaLaptopCode, FaLightbulb } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-page section">
      <div className="container">
        {/* Page Header */}
        <div className="section-header">
          <span className="subtitle">Technical Mastery</span>
          <h2>Skills & Development Ecosystem</h2>
          <p>Comprehensive overview of frontend frameworks, build tools, design inspection, and AI engineering workflows.</p>
        </div>

        {/* Frontend Core Skills */}
        <div className="skills-category-block">
          <h3 className="category-title">
            <FaCode className="cat-header-icon" /> Frontend Engineering Core
          </h3>
          <div className="skills-grid">
            {skillsData.frontend.map((skill, idx) => (
              <div key={idx} className="skill-card glass-panel">
                <div className="skill-info-row">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-progress-bar">
                  <motion.div
                    className="skill-progress-fill fill-violet"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Build Tools & Developer Tools */}
        <div className="skills-category-block">
          <h3 className="category-title">
            <FaTools className="cat-header-icon teal" /> Tools & Version Control
          </h3>
          <div className="skills-grid">
            {skillsData.tools.map((skill, idx) => (
              <div key={idx} className="skill-card glass-panel">
                <div className="skill-info-row">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-progress-bar">
                  <motion.div
                    className="skill-progress-fill fill-teal"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Tools & Workflows */}
        <div className="skills-category-block">
          <h3 className="category-title">
            <FaRobot className="cat-header-icon amber" /> AI Tools & Modern Engineering Workflow
          </h3>
          <p className="ai-intro-text">
            Leveraging AI-assisted development tools to accelerate prototyping, optimize code quality, and maintain sub-second developer velocity.
          </p>

          <div className="skills-grid">
            {skillsData.aiTools.map((skill, idx) => (
              <div key={idx} className="skill-card glass-panel">
                <div className="skill-info-row">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-progress-bar">
                  <motion.div
                    className="skill-progress-fill fill-amber"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clean Code Principles Feature Card */}
        <div className="clean-code-banner glass-panel">
          <FaLightbulb className="banner-icon" />
          <div>
            <h3>Clean Code & Architectural Principles</h3>
            <p>
              Adhering to DRY (Don't Repeat Yourself), SOLID design principles, modular CSS design tokens, dynamic React hooks, and strict accessibility standards across every project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
