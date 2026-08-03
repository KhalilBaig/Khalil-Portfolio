import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { projectsData } from '../data/portfolioData';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaLightbulb, FaChartLine, FaTools, FaCheckCircle } from 'react-icons/fa';
import './CaseStudyDetail.css';

const CaseStudyDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id) || projectsData[0];
  const { caseStudy } = project;

  return (
    <div className="case-study-page section">
      <div className="container">
        {/* Back Link */}
        <NavLink to="/projects" className="back-link">
          <FaArrowLeft /> Back to All Projects
        </NavLink>

        {/* Hero Header */}
        <div className="case-hero glass-panel">
          <div className="case-hero-content">
            <span className="badge badge-teal">{project.category}</span>
            <h1>{project.title}</h1>
            <p className="lead-text">{project.description}</p>

            <div className="case-links-row">
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

          <div className="case-hero-image">
            <img src={project.image} alt={project.title} />
          </div>
        </div>

        {/* Case Study Deep Dive Breakdown */}
        <div className="case-sections-grid">
          {/* Section 1: Problem & Goals */}
          <div className="case-card glass-panel">
            <h3><FaLightbulb className="icon-violet" /> Problem & Business Goal</h3>
            <p><strong>Problem:</strong> {caseStudy.problem}</p>
            <p style={{ marginTop: '1rem' }}><strong>Business Goal:</strong> {caseStudy.businessGoal}</p>
          </div>

          {/* Section 2: Research & Planning */}
          <div className="case-card glass-panel">
            <h3>Research & Planning</h3>
            <p><strong>Research & Auditing:</strong> {caseStudy.research}</p>
            <p style={{ marginTop: '1rem' }}><strong>Architecture Planning:</strong> {caseStudy.planning}</p>
          </div>

          {/* Section 3: Architecture & UI Decisions */}
          <div className="case-card glass-panel">
            <h3><FaTools className="icon-teal" /> Architecture & UI Decisions</h3>
            <p><strong>Technical Architecture:</strong> {caseStudy.architecture}</p>
            <p style={{ marginTop: '1rem' }}><strong>UI/UX Design Decisions:</strong> {caseStudy.uiDecisions}</p>

            <div className="tech-stack-row">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="tech-pill-lg">{tech}</span>
              ))}
            </div>
          </div>

          {/* Section 4: Engineering Challenges & Solutions */}
          <div className="case-card glass-panel highlight-border">
            <h3><FaChartLine className="icon-amber" /> Challenges & Solutions</h3>
            <p><strong>Key Challenge:</strong> {caseStudy.challenges}</p>
            <p style={{ marginTop: '1rem' }}><strong>Engineering Solution:</strong> {caseStudy.solutions}</p>
          </div>

          {/* Section 5: Optimization & Lessons */}
          <div className="case-card glass-panel">
            <h3><FaCheckCircle className="icon-success" /> Optimization & Future Roadmap</h3>
            <p><strong>Web Vitals Optimization:</strong> {caseStudy.optimization}</p>
            <p style={{ marginTop: '1rem' }}><strong>Key Takeaways:</strong> {caseStudy.lessonsLearned}</p>
            <p style={{ marginTop: '1rem' }}><strong>Future Roadmap:</strong> {caseStudy.futureImprovements}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
