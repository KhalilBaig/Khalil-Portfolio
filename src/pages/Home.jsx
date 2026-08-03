import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  developerProfile,
  projectsData,
  servicesData,
} from "../data/portfolioData";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import GitHubRepos from "../components/GitHubRepos";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import {
  FaDownload,
  FaArrowRight,
  FaCode,
  FaRocket,
  FaCheckCircle,
  FaBriefcase,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import "./Home.css";

const Home = () => {
  const [selectedModalProject, setSelectedModalProject] = useState(null);
  const [typingIndex, setTypingIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = developerProfile.roles;

  // Typing Effect Logic
  useEffect(() => {
    const fullText = roles[typingIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }, 100);
    }

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setTypingIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typingIndex, roles]);

  const featuredProjects = projectsData.slice(0, 3);
  const featuredServices = servicesData.slice(0, 4);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hero-badge badge">
              <span className="live-status-dot" />
              <span>{developerProfile.availability}</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm{" "}
              <span className="gradient-text">{developerProfile.name}</span>
              <br />
              <span className="typing-wrapper">
                I am <span className="typing-text">{currentText}</span>
                <span className="cursor-blink">|</span>
              </span>
            </h1>

            <p className="hero-description">
              Frontend Developer specializing in React.js, transforming ideas
              into modern, responsive, and scalable web applications by
              combining clean engineering practices with AI-powered development
              workflows.
            </p>

            <div className="hero-cta-buttons">
              <NavLink to="/contact" className="btn-primary">
                <span>Hire Me Now</span>
                <FaArrowRight />
              </NavLink>
              <NavLink to="/resume" className="btn-secondary">
                <span>Download Resume</span>
                <FaDownload />
              </NavLink>
            </div>

            {/* Social Links Bar */}
            <div className="hero-social-row">
              <span className="social-label">Follow & Connect:</span>
              <a
                href={developerProfile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={developerProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href={developerProfile.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${developerProfile.email}&su=Project Inquiry`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          {/* Hero Profile Photo & Visual Card */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="photo-card-frame glass-panel">
              <img
                src="/profile.png"
                alt="Khalil - Senior Frontend Engineer"
                className="hero-profile-img"
              />
              <div className="photo-badge floating-badge-1 glass-panel">
                <FaCode className="badge-icon-violet" />
                <div>
                  <strong>React.js Architect</strong>
                  <span>ES6+ & Custom Hooks</span>
                </div>
              </div>
              <div className="photo-badge floating-badge-2 glass-panel">
                <FaRocket className="badge-icon-teal" />
                <div>
                  <strong>100% Performance</strong>
                  <span>Sub-second load times</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid glass-panel">
            {developerProfile.statistics.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <h2 className="stat-value gradient-text">
                  {stat.prefix}
                  {stat.value}
                  {stat.suffix}
                </h2>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee Section */}
      <section className="section tech-preview-section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Core Expertise</span>
            <h2>Modern Frontend Tech Stack</h2>
            <p>
              Battle-tested tools and frameworks used to build high-performance
              web applications.
            </p>
          </div>

          <div className="tech-pills-row">
            {[
              "React.js",
              "JavaScript ES6+",
              "React Router DOM",
              "CSS3 / Custom Variables",
              "Framer Motion",
              "Vite",
              "REST APIs",
              "Context API",
              "Git & GitHub",
              "EmailJS",
              "LocalStorage",
            ].map((tech, idx) => (
              <span key={idx} className="tech-stack-card glass-panel">
                <FaCode className="tech-card-icon" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <section className="section featured-projects-section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Portfolio Showcase</span>
            <h2>Featured Web Development Projects</h2>
            <p>
              A selection of production-ready applications built with clean
              architecture and luxury UI.
            </p>
          </div>

          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelectModal={(proj) => setSelectedModalProject(proj)}
              />
            ))}
          </div>

          <div className="view-more-container">
            <NavLink to="/projects" className="btn-secondary">
              <span>View All 12 Projects</span>
              <FaArrowRight />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section services-preview-section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">What I Do</span>
            <h2>Professional Engineering Services</h2>
            <p>
              High-value frontend development services tailored for startups and
              businesses.
            </p>
          </div>

          <div className="services-grid">
            {featuredServices.map((service) => (
              <div key={service.id} className="service-card glass-panel">
                <div className="service-icon-wrapper">
                  <FaBriefcase />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-deliverables">
                  {service.deliverables.slice(0, 2).map((item, idx) => (
                    <li key={idx}>
                      <FaCheckCircle className="check-icon" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="view-more-container">
            <NavLink to="/services" className="btn-primary">
              <span>Explore All 12 Services</span>
              <FaArrowRight />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Live GitHub Repositories Section */}
      <section className="section github-section">
        <div className="container">
          <GitHubRepos username="octocat" />
        </div>
      </section>

      {/* Testimonials Preview Section */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Testimonials</span>
            <h2>What Clients & Team Leads Say</h2>
            <p>
              Feedback from founders, engineering leads, and clients around the
              world.
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* High-Converting Contact CTA Card */}
      <section className="section cta-banner-section">
        <div className="container">
          <div className="cta-banner-card glass-panel">
            <div className="cta-content">
              <h2>Have a Project in Mind or Hiring for a React Role?</h2>
              <p>
                Let's collaborate to build an incredible web application that
                elevates your product vision.
              </p>
            </div>
            <div className="cta-actions">
              <NavLink to="/contact" className="btn-primary">
                <span>Start a Conversation</span>
                <FaArrowRight />
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Modal Dialog */}
      {selectedModalProject && (
        <ProjectModal
          project={selectedModalProject}
          onClose={() => setSelectedModalProject(null)}
        />
      )}
    </div>
  );
};

export default Home;
