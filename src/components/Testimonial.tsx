import React from 'react';
import testimonialLamp from '../assets/testimonial-lamp.jpg';
import testimonialAvatar from '../assets/testimonial-avatar.jpg';

const Testimonial: React.FC = () => {
  return (
    <section className="testimonial" id="trainers">
      <div className="testimonial-container">
        <div className="testimonial-image">
          <img src={testimonialLamp} alt="Fitness equipment" />
        </div>
        
        <div className="testimonial-content">
          <h2>What People Are Saying About Us</h2>
          <h3 className="section-title">Our Members Love Their Results</h3>
          
          <blockquote className="testimonial-quote">
            "They are have a perfect touch for make something so professional 
            and i am really like with it. The trainers here changed my life! 
            I've lost 30 pounds and gained so much confidence. Best decision 
            I ever made."
          </blockquote>
          
          <div className="testimonial-author">
            <img 
              src={testimonialAvatar} 
              alt="John Maina" 
              className="author-avatar"
            />
            <div className="author-info">
              <h4>John Maina</h4>
              <span>Member since 2023</span>
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
