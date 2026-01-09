import React from 'react';
import categoryStrength from '../assets/category-strength.jpg';
import categoryCardio from '../assets/category-cardio.jpg';
import categoryCrossfit from '../assets/category-crossfit.jpg';
import categoryYoga from '../assets/category-yoga.jpg';

const Categories: React.FC = () => {
  const categories = [
    { name: 'Strength Training', image: categoryStrength },
    { name: 'Cardio', image: categoryCardio },
    { name: 'CrossFit', image: categoryCrossfit },
    { name: 'Yoga', image: categoryYoga },
  ];

  return (
    <section className="categories" id="programs">
      <div className="categories-container">
        <div className="categories-header">
          <h2>New In Store Now</h2>
        </div>
        
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <img src={category.image} alt={category.name} />
              <div className="category-overlay">
                <span className="category-name">{category.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
