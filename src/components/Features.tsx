import React from 'react';
import categoryStrength from '../assets/category-strength.jpg';

const Features: React.FC = () => {
  return (
    <section className="features" id="about">
      <div className="features-container">
        <div className="features-image">
          <img src={categoryStrength} alt="Personal trainer coaching athlete" />
        </div>
        
        <div className="features-content">
          <span className="section-subtitle">Why Choose Us</span>
          <h2 className="section-title">We Create Your Body More Aesthetic</h2>
          <p>
            Experience personalized coaching, top-tier equipment, and a supportive 
            community. Transform your body and mind with our expert trainers and 
            comprehensive fitness programs designed for all levels.
          </p>
          
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="feature-text">
                <h4>Personal Training Services</h4>
                <p>Expert trainers to guide your fitness journey</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="feature-text">
                <h4>Nutrition Coaching</h4>
                <p>Customized meal plans for your goals</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="feature-text">
                <h4>Body Transformation Programs</h4>
                <p>State-of-the-art equipment and facilities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
