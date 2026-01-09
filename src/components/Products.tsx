import React, { useState } from 'react';
import productMonthly from '../assets/product-monthly.jpg';
import productAnnual from '../assets/product-annual.jpg';
import productWeightloss from '../assets/product-weightloss.jpg';
import productMuscle from '../assets/product-muscle.jpg';
import productHiit from '../assets/product-hiit.jpg';
import productFlexibility from '../assets/product-flexibility.jpg';
import productEndurance from '../assets/product-endurance.jpg';
import productNutrition from '../assets/product-nutrition.jpg';

const Products: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Memberships', 'Programs', 'Nutrition'];

  const products = [
    { id: 1, name: 'Monthly Membership', category: 'Memberships', price: 'Ksh 12,500', image: productMonthly, badge: 'Popular' },
    { id: 2, name: 'Annual Membership', category: 'Memberships', price: 'KSh 42,000', image: productAnnual, badge: 'Best Value' },
    { id: 3, name: 'Weight Loss Program', category: 'Programs', price: 'Ksh 2,000', image: productWeightloss },
    { id: 4, name: 'Muscle Building Program', category: 'Programs', price: 'Ksh 3,500', image: productMuscle },
    { id: 5, name: 'HIIT Training', category: 'Programs', price: 'Ksh 55,000', image: productHiit },
    { id: 6, name: 'Flexibility Training', category: 'Programs', price: 'Ksh 15,000', image: productFlexibility },
    { id: 7, name: 'Endurance Training', category: 'Programs', price: 'Ksh 10,000', image: productEndurance },
    { id: 8, name: 'Nutrition Coaching', category: 'Nutrition', price: 'Ksh 20,000', image: productNutrition, badge: 'New' },
  ];

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <section className="products" id="membership">
      <div className="products-container">
        <div className="products-header">
          <div className="products-header-left">
            <h2>All Programs</h2>
            <p>The best fitness programs, tailored to your goals and lifestyle.</p>
          </div>
          
          <div className="products-filter">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                {product.badge && (
                  <span className="product-badge">{product.badge}</span>
                )}
                <button className="product-wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              <div className="product-info">
                <h4 className="product-name">{product.name}</h4>
                <p className="product-category">{product.category}</p>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <button className="product-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
