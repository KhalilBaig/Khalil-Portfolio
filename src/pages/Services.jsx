import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../data/portfolioData';
import { FaCode, FaReact, FaMobileAlt, FaRocket, FaLaptopCode, FaBuilding, FaChartLine, FaExchangeAlt, FaFigma, FaTachometerAlt, FaBug, FaTools, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import './Services.css';

const iconMap = {
  FaCode: FaCode,
  FaReact: FaReact,
  FaMobileAlt: FaMobileAlt,
  FaRocket: FaRocket,
  FaLaptopCode: FaLaptopCode,
  FaBuilding: FaBuilding,
  FaChartLine: FaChartLine,
  FaExchangeAlt: FaExchangeAlt,
  FaFigma: FaFigma,
  FaTachometerAlt: FaTachometerAlt,
  FaBug: FaBug,
  FaTools: FaTools,
};

const Services = () => {
  return (
    <div className="services-page section">
      <div className="container">
        {/* Page Header */}
        <div className="section-header">
          <span className="subtitle">High-Value Solutions</span>
          <h2>Professional Engineering Services</h2>
          <p>End-to-end frontend development and React architecture services tailored for startups and businesses.</p>
        </div>

        {/* 12 Services Grid */}
        <div className="all-services-grid">
          {servicesData.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || FaCode;
            return (
              <motion.div
                key={service.id}
                className="service-detail-card glass-panel"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <div className="service-header-row">
                  <div className="service-icon-box">
                    <IconComponent />
                  </div>
                  <span className="service-number">0{idx + 1}</span>
                </div>

                <h3>{service.title}</h3>
                <p className="service-desc">{service.description}</p>

                <h4 className="deliverables-title">Key Deliverables:</h4>
                <ul className="deliverables-list">
                  {service.deliverables.map((item, dIdx) => (
                    <li key={dIdx}>
                      <FaCheckCircle className="d-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <NavLink to="/contact" className="service-cta-link">
                  <span>Inquire Service</span>
                  <FaArrowRight />
                </NavLink>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Banner */}
        <div className="services-banner glass-panel">
          <div>
            <h3>Need a Custom Solution or Enterprise Team Integration?</h3>
            <p>I am available for freelance client contracts and full-time senior developer roles.</p>
          </div>
          <NavLink to="/contact" className="btn-primary">
            <span>Discuss Your Project</span>
            <FaArrowRight />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Services;
