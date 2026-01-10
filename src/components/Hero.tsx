import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=1170&auto=format&fit=crop')",
      }}
    >
      <div className="hero-overlay">
        <div className="hero-container">

          {/* TEXT CONTENT */}
          <div className="hero-content">
            <span className="hero-subtitle">Fitness</span>

            <h1 className="hero-title">
              Transform Your <span>Body</span> Elevate Your <span>Strength</span>
            </h1>

            <p className="hero-description">
              Do you imagine achieving your dream physique, perfect in every
              detail? We are here to help you turn that dream into reality. Your
              gym partner for transformation and results.
            </p>

            <a href="#programs" className="hero-btn">
              Join Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* STATS BAR */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">7</span>
              <span className="stat-label">Year<br />Experience</span>
            </div>

            <div className="stat-divider" />

            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">Opened in<br />the country</span>
            </div>

            <div className="stat-divider" />

            <div className="stat-item">
              <span className="stat-number">10k+</span>
              <span className="stat-label">Active<br />Members</span>
            </div>

            <div className="stat-divider" />

            <div className="stat-item">
              <span className="stat-number">260+</span>
              <span className="stat-label">Training<br />Programs</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
