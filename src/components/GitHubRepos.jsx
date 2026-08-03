import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa';
import './GitHubRepos.css';

const fallbackRepos = [
  {
    id: 1,
    name: "react-luxury-portfolio-template",
    description: "Production-ready Senior Developer Portfolio built with React.js, Framer Motion, and Glassmorphism design system.",
    stargazers_count: 142,
    forks_count: 38,
    language: "JavaScript",
    html_url: "https://github.com"
  },
  {
    id: 2,
    name: "edupanel-lms-react",
    description: "Enterprise Learning Management System built with React Context API, custom video controls, and interactive dashboard charts.",
    stargazers_count: 98,
    forks_count: 24,
    language: "JavaScript",
    html_url: "https://github.com"
  },
  {
    id: 3,
    name: "kanban-task-flow",
    description: "60fps Framer Motion drag and drop Kanban task board with custom sub-task checklists and local storage persistence.",
    stargazers_count: 85,
    forks_count: 19,
    language: "CSS",
    html_url: "https://github.com"
  }
];

const GitHubRepos = ({ username = "octocat" }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        if (!res.ok) throw new Error('API Rate Limited or Not Found');
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setRepos(data);
        } else {
          setRepos(fallbackRepos);
        }
      } catch (err) {
        console.warn('GitHub API Fallback enabled:', err);
        setRepos(fallbackRepos);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return (
    <div className="github-repos-widget">
      <div className="github-widget-header">
        <div className="header-left">
          <FaGithub className="github-icon-lg" />
          <div>
            <h3>Open Source Repositories</h3>
            <p className="subtitle">Live GitHub activity & code statistics</p>
          </div>
        </div>
        <a
          href={`https://github.com`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          <span>View GitHub</span>
          <FaExternalLinkAlt />
        </a>
      </div>

      {loading ? (
        <div className="repos-grid">
          {[1, 2, 3].map((n) => (
            <div key={n} className="repo-card skeleton-card">
              <div className="skeleton-line title-sk" />
              <div className="skeleton-line desc-sk" />
              <div className="skeleton-line desc-sk" style={{ width: '60%' }} />
            </div>
          ))}
        </div>
      ) : (
        <div className="repos-grid">
          {repos.map((repo) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="repo-card glass-panel"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="repo-header">
                <span className="repo-name">{repo.name}</span>
                <FaExternalLinkAlt className="repo-link-icon" />
              </div>
              <p className="repo-desc">{repo.description || "Production web repository built with clean React architecture."}</p>
              <div className="repo-meta">
                {repo.language && <span className="repo-lang-badge"><span className="lang-dot" /> {repo.language}</span>}
                <span className="repo-stat"><FaStar /> {repo.stargazers_count}</span>
                <span className="repo-stat"><FaCodeBranch /> {repo.forks_count}</span>
              </div>
            </motion.a>
          ))}
        </div>
      )}
    </div>
  );
};

export default GitHubRepos;
