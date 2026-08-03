import React from 'react';
import { motion } from 'framer-motion';
import { developerProfile, experienceData, projectsData, certificationsData } from '../data/portfolioData';
import { FaDownload, FaBriefcase, FaGraduationCap, FaCode, FaAward, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFilePdf } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
  const handleDownload = () => {
    // Generate a formatted plain-text or PDF resume file on-the-fly
    const resumeText = `
TALHA - SENIOR FRONTEND ENGINEER & REACT ARCHITECT
Location: ${developerProfile.location} | Email: ${developerProfile.email} | Phone: ${developerProfile.phone}
GitHub: ${developerProfile.github} | LinkedIn: ${developerProfile.linkedin}

--------------------------------------------------------------------------------
SUMMARY
--------------------------------------------------------------------------------
${developerProfile.bio}

--------------------------------------------------------------------------------
CORE SKILLS
--------------------------------------------------------------------------------
- Frontend: React.js, JavaScript ES6+, React Router DOM, HTML5, CSS3, Framer Motion, Context API
- Tools & Build: Vite, Git, GitHub, VS Code, Figma, Postman
- AI Workflows: ChatGPT, GitHub Copilot, Prompt Engineering, AI-Assisted Development

--------------------------------------------------------------------------------
WORK EXPERIENCE
--------------------------------------------------------------------------------
${experienceData.map((e) => `
* ${e.role} — ${e.company} (${e.period})
  - ${e.description}
  - Highlights: ${e.highlights.join('; ')}
  - Tech Stack: ${e.technologies.join(', ')}
`).join('\n')}

--------------------------------------------------------------------------------
FEATURED PROJECTS
--------------------------------------------------------------------------------
${projectsData.slice(0, 5).map((p) => `
* ${p.title} (${p.category})
  - ${p.description}
  - Tech Stack: ${p.techStack.join(', ')}
`).join('\n')}

--------------------------------------------------------------------------------
CERTIFICATIONS
--------------------------------------------------------------------------------
${certificationsData.map((c) => `- ${c.name} (${c.issuer}, ${c.year})`).join('\n')}
    `;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Talha_Senior_React_Developer_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-page section">
      <div className="container">
        {/* Page Header */}
        <div className="section-header">
          <span className="subtitle">Curriculum Vitae</span>
          <h2>Professional Resume Viewer</h2>
          <p>Review my complete background online or download a copy for offline recruiter evaluation.</p>

          <div className="resume-download-bar">
            <button onClick={handleDownload} className="btn-primary">
              <FaDownload /> Download Resume
            </button>
          </div>
        </div>

        {/* Paper / Glass Resume Container */}
        <motion.div
          className="resume-paper-card glass-panel"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Header Bar */}
          <div className="resume-paper-header">
            <div>
              <h1 className="resume-name">{developerProfile.name}</h1>
              <h3 className="resume-role">{developerProfile.title}</h3>
            </div>
            <div className="resume-contact-col">
              <p><FaEnvelope /> {developerProfile.email}</p>
              <p><FaPhone /> {developerProfile.phone}</p>
              <p><FaMapMarkerAlt /> {developerProfile.location}</p>
            </div>
          </div>

          <hr className="resume-divider" />

          {/* Section 1: Executive Summary */}
          <div className="resume-section">
            <h4 className="resume-sec-title"><FaCode /> Professional Summary</h4>
            <p className="resume-sec-text">{developerProfile.bio}</p>
          </div>

          {/* Section 2: Technical Skills Matrix */}
          <div className="resume-section">
            <h4 className="resume-sec-title"><FaCode /> Technical Expertise</h4>
            <div className="skills-matrix">
              <div>
                <strong>Frontend:</strong> React.js, JavaScript (ES6+), React Router DOM, HTML5, CSS3, Framer Motion, Context API, REST APIs
              </div>
              <div>
                <strong>Tools & Workflow:</strong> Vite, Git & GitHub, VS Code, Figma, Postman, Custom Scrollbar & UI Systems
              </div>
              <div>
                <strong>AI Engineering:</strong> ChatGPT Code Architecture, GitHub Copilot, Prompt Engineering, Rapid Prototyping, Vibe Coding, Claude AI (Code Architecture), Antigravity AI (Debugging & Development)
              </div>
            </div>
          </div>

          {/* Section 3: Work Experience */}
          <div className="resume-section">
            <h4 className="resume-sec-title"><FaBriefcase /> Work Experience</h4>
            {experienceData.map((exp) => (
              <div key={exp.id} className="resume-exp-item">
                <div className="exp-top-line">
                  <strong>{exp.role}</strong> — <span>{exp.company}</span>
                  <span className="exp-dates">{exp.period}</span>
                </div>
                <p className="exp-desc">{exp.description}</p>
                <ul className="exp-bullet-list">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Section 4: Key Projects */}
          <div className="resume-section">
            <h4 className="resume-sec-title"><FaCode /> Selected Projects</h4>
            <div className="resume-projects-list">
              {projectsData.slice(0, 4).map((proj) => (
                <div key={proj.id} className="resume-proj-item">
                  <strong>{proj.title}</strong> ({proj.category}): <span>{proj.description}</span>
                  <br />
                  <small style={{ color: 'var(--text-muted)' }}>Tech: {proj.techStack.join(', ')}</small>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Education & Certifications */}
          <div className="resume-section">
            <h4 className="resume-sec-title"><FaGraduationCap /> Education & Certifications</h4>
            <p><strong>Bachelor of Engineering in Electronics Engineering </strong> NED University of Engineering & Technology, Karachi (2019 - 2023)</p>
            <div className="resume-cert-inline">
              {certificationsData.map((c, i) => (
                <span key={i} className="badge">
                  <FaAward /> {c.name} ({c.year})
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
