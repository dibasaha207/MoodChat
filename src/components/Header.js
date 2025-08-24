import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">💬</div>
            <span className="logo-text">MoodChat</span>
          </div>
          
          <nav className="nav">
            <button onClick={() => scrollToSection('hero')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('mood-selector')} className="nav-link">Mood</button>
            <button onClick={() => scrollToSection('features')} className="nav-link">Features</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
