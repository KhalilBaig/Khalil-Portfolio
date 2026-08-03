import React from "react";
import { NavLink } from "react-router-dom";
import { developerProfile } from "../data/portfolioData";
import {
  FaCode,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaArrowUp,
  FaCheckCircle,
  FaDownload,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & Bio */}
          <div className="footer-col brand-col">
            <NavLink to="/" className="footer-logo">
              <span className="logo-icon">
                <FaCode />
              </span>
              <span className="logo-text">
                Khalil<span className="logo-dot">.dev</span>
              </span>
            </NavLink>
            <p className="footer-bio">
              Frontend Engineer & React.js Developer with 2+ years of
              professional experience building modern, responsive, and
              user-centric web applications while leveraging AI-assisted
              development to improve productivity and code quality.
            </p>
            <div className="availability-badge">
              <FaCheckCircle className="badge-icon" />
              <span>{developerProfile.availability}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Story</NavLink>
              </li>
              <li>
                <NavLink to="/projects">All Projects</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/skills">Technical Skills</NavLink>
              </li>
            </ul>
          </div>

          {/* Quick Resources */}
          <div className="footer-col">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li>
                <NavLink to="/experience">Career Journey</NavLink>
              </li>
              <li>
                <NavLink to="/resume">Resume Viewer</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Get in Touch</NavLink>
              </li>
              <li>
                <a
                  href={developerProfile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Projects
                </a>
              </li>
              <li>
                <a
                  href={developerProfile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Resume CTA */}
          <div className="footer-col connect-col">
            <h4 className="footer-heading">Let's Connect</h4>
            <p className="footer-connect-text">
              Have an exciting project or job opportunity? Let's build something
              exceptional together.
            </p>
            <div className="social-icons">
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

            <NavLink to="/resume" className="btn-secondary footer-resume-btn">
              <FaDownload /> Download CV
            </NavLink>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} Khalil. All rights reserved. Designed &
            Built with React.js & Framer Motion.
          </p>
          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Back to Top"
          >
            <span>Back to Top</span>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
