import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ project, onSelectModal }) => {
  return (
    <motion.div
      className="project-card glass-panel"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      layout
    >
      {/* Project Image Container */}
      <div className="card-image-wrapper">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="card-image-overlay" />
        <span className="card-badge badge">{project.category}</span>
        {project.badge && <span className="card-feature-badge badge-teal">{project.badge}</span>}
      </div>

      {/* Card Content */}
      <div className="card-body">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-description">{project.description}</p>

        {/* Tech Stack Pills */}
        <div className="card-tech-stack">
          {project.techStack.map((tech, idx) => (
            <span key={idx} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>

        {/* Card Actions Footer */}
        <div className="card-footer">
          <button
            onClick={() => onSelectModal(project)}
            className="btn-primary card-details-btn"
          >
            <FaInfoCircle />
            <span>Case Study</span>
          </button>

          <div className="card-icon-links">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                title="View Source Code"
                className="icon-link"
              >
                <FaGithub />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
                title="View Live Web App"
                className="icon-link"
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
