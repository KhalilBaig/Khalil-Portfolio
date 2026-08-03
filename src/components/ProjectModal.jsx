import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCheckCircle, FaLightbulb, FaTools, FaChartLine } from 'react-icons/fa';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div
          className="modal-content glass-panel"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {/* Close Button */}
          <button className="modal-close-btn" onClick={onClose} aria-label="Close Modal">
            <FaTimes />
          </button>

          {/* Modal Header */}
          <div className="modal-header">
            <span className="badge badge-teal">{project.category}</span>
            <h2>{project.title}</h2>
            <p className="modal-subtitle">{project.description}</p>

            <div className="modal-actions-row">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  <FaGithub /> Source Code
                </a>
              )}
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="modal-tabs">
            <button
              className={`modal-tab ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview & Goals
            </button>
            <button
              className={`modal-tab ${activeTab === 'architecture' ? 'active' : ''}`}
              onClick={() => setActiveTab('architecture')}
            >
              Architecture & Tech
            </button>
            <button
              className={`modal-tab ${activeTab === 'challenges' ? 'active' : ''}`}
              onClick={() => setActiveTab('challenges')}
            >
              Challenges & Solutions
            </button>
            <button
              className={`modal-tab ${activeTab === 'outcomes' ? 'active' : ''}`}
              onClick={() => setActiveTab('outcomes')}
            >
              Optimization & Lessons
            </button>
          </div>

          {/* Tab Content Area */}
          <div className="modal-tab-body">
            {activeTab === 'overview' && (
              <div className="tab-pane">
                <div className="case-block">
                  <h4><FaLightbulb className="block-icon" /> The Problem Statement</h4>
                  <p>{caseStudy.problem}</p>
                </div>

                <div className="case-block">
                  <h4><FaChartLine className="block-icon" /> Business & User Goals</h4>
                  <p>{caseStudy.businessGoal}</p>
                </div>

                <div className="case-block">
                  <h4>Research & Planning</h4>
                  <p>{caseStudy.research}</p>
                  <p style={{ marginTop: '0.5rem' }}>{caseStudy.planning}</p>
                </div>
              </div>
            )}

            {activeTab === 'architecture' && (
              <div className="tab-pane">
                <div className="case-block">
                  <h4>System Architecture & Logic</h4>
                  <p>{caseStudy.architecture}</p>
                </div>

                <div className="case-block">
                  <h4>UI/UX & Design Decisions</h4>
                  <p>{caseStudy.uiDecisions}</p>
                </div>

                <div className="case-block">
                  <h4>Tech Stack Breakdown</h4>
                  <div className="modal-tech-pills">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="tech-pill-lg">
                        <FaTools /> {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'challenges' && (
              <div className="tab-pane">
                <div className="case-block highlight-danger">
                  <h4>Key Engineering Challenge</h4>
                  <p>{caseStudy.challenges}</p>
                </div>

                <div className="case-block highlight-success">
                  <h4>Implemented Solution</h4>
                  <p>{caseStudy.solutions}</p>
                </div>
              </div>
            )}

            {activeTab === 'outcomes' && (
              <div className="tab-pane">
                <div className="case-block">
                  <h4>Performance Optimization & Web Vitals</h4>
                  <p>{caseStudy.optimization}</p>
                </div>

                <div className="case-block">
                  <h4>Key Takeaways & Lessons Learned</h4>
                  <p>{caseStudy.lessonsLearned}</p>
                </div>

                <div className="case-block">
                  <h4><FaCheckCircle className="block-icon success" /> Future Roadmap</h4>
                  <p>{caseStudy.futureImprovements}</p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
