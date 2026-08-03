import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "../data/portfolioData";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { FaSearch, FaGithub, FaEnvelope, FaLayerGroup } from "react-icons/fa";
import "./Projects.css";

const categories = [
  "All",
  "LMS & EdTech",
  "E-Commerce",
  "Dashboards",
  "Web Apps",
  "APIs & Auth",
];

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedModalProject, setSelectedModalProject] = useState(null);

  // Filter projects based on Search and Category
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="projects-page section">
      <div className="container">
        {/* Page Header */}
        <div className="section-header">
          <span className="subtitle">Curated Portfolio</span>
          <h2>Web Development Projects</h2>
          <p>
            Explore 12 production-grade React web applications with complete
            architectural case studies.
          </p>
        </div>

        {/* Filter Controls (Search & Categories) */}
        <div className="filter-controls-container glass-panel">
          {/* Search Box */}
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search projects by name, description, or tech stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="clear-search-btn"
                onClick={() => setSearchQuery("")}
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="category-tabs-row">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-btn ${
                  selectedCategory === cat ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                <FaLayerGroup className="cat-icon" />
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="empty-state-card glass-panel">
            <p>
              No web development projects match your search query "{searchQuery}
              ".
            </p>
            <button
              className="btn-secondary"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div className="projects-grid" layout>
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelectModal={(proj) => setSelectedModalProject(proj)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Bottom GitHub & Contact CTA */}
        <div className="projects-bottom-cta glass-panel">
          <div className="cta-left">
            <FaGithub className="cta-gh-icon" />
            <div>
              <h3>Want to explore more open-source code?</h3>
              <p>
                Check out my GitHub profile for experimental packages, starter
                templates, and code samples.
              </p>
            </div>
          </div>
          <div className="cta-right">
            <a
              href="https://github.com/KhalilBaig?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <FaGithub /> GitHub Repositories
            </a>
            <a href="/contact" className="btn-primary">
              <FaEnvelope /> Hire Me
            </a>
          </div>
        </div>
      </div>

      {/* Case Study Modal Popup */}
      {selectedModalProject && (
        <ProjectModal
          project={selectedModalProject}
          onClose={() => setSelectedModalProject(null)}
        />
      )}
    </div>
  );
};

export default Projects;
