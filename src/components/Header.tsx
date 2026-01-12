import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`header ${isScrolled ? 'header-scrolled' : ''} ${
        isMenuOpen ? 'menu-is-open' : ''
      }`}
    >
      <div className="header-container">

        {/* LOGO */}
        <a href="/" className="logo" aria-label="Apex Fitness Home">
          <img
            src="https://image2url.com/r2/default/images/1768201943557-77c69d11-0d23-46b8-97a4-ae0683bbe858.png"
            alt="Apex Fitness Logo"
            className="logo-img"
          />
          <span className="logo-text">
            Apex <strong>Fitness</strong>
          </span>
        </a>

        {/* NAVIGATION */}
        <nav className={`nav ${isMenuOpen ? 'nav-active' : ''}`}>
          <ul className="nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ACTIONS */}
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
