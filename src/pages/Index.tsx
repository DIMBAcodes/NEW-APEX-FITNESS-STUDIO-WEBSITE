import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import '../styles/main.css';

const Index: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Features />
      <Categories />
      <Products />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
