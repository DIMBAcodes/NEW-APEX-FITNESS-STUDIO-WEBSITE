import React from 'react';
import ctaGym from '../assets/cta-gym.jpg';

const CTA: React.FC = () => {
  return (
    <section className="cta">
      <div className="cta-bg">
        <img src={ctaGym} alt="Gym background" />
      </div>
      
      <div className="cta-container">
        <div className="cta-content">
          <h2>Get more discount Off your order</h2>
          <p>
            Join today and get your first month free! Sign up for our newsletter 
            and receive exclusive offers on memberships and programs.
          </p>
          <a href="#membership" className="cta-btn">
            Shop Now
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
        
        <div className="cta-form-wrapper">
          <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              className="cta-input" 
              placeholder="Enter your email address" 
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
