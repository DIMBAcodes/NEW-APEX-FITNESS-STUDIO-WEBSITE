import React from 'react';
import heroGym from '../assets/hero-gym.jpg';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-subtitle">Fitness</span>
          <h1 className="hero-title">
            Transform Your <span>Body</span> Elevate Your <span>Strength</span>
          </h1>
          <p className="hero-description">
            Do you imagine achieving your dream physique, perfect in every detail? 
            We are here to help you turn that dream into reality. Your gym partner for 
            transformation and results.
          </p>
          <a href="#programs" className="hero-btn">
            Join Now
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">7</span>
              <span className="stat-label">Years<br/>Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10k+</span>
              <span className="stat-label">Active<br/>Members</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">260+</span>
              <span className="stat-label">Training<br/>Programs</span>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <img src={heroGym} alt="Modern gym interior with fitness equipment" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
