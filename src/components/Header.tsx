import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react'; // Using Lucide for cleaner icons

const NAV_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Trainers', href: '#trainers' },
  { name: 'Membership', href: '#membership' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle header background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''} ${isMenuOpen ? 'menu-is-open' : ''}`}>
      <div className="header-container">
        {/* Logo Section */}
        <a href="#" className="logo" aria-label="Sage Fitness Home">
          Apex<span>FitnessStudio</span>
        </a>

        {/* Desktop Navigation */}
        <nav className={`nav ${isMenuOpen ? 'nav-active' : ''}`}>
          <ul className="nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Icons */}
        <div className="header-actions">
          <button className="action-btn" aria-label="Search">
            <Search size={20} />
          </button>
          
          <button className="action-btn" aria-label="Account">
            <User size={20} />
          </button>

          <button className="action-btn cart-btn" aria-label="Shopping Cart">
            <ShoppingCart size={20} />
            <span className="cart-count">2</span>
          </button>

          {/* Mobile Toggle Button */}
          <button 
            className="mobile-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;