import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Chat according to your mood
            </h1>
            <p className="hero-subtitle">
              Start chatting with an AI that adapts to your emotions and provides personalized responses
            </p>

          </div>
          
          <div className="hero-illustration">
            <div className="illustration-container">
              <div className="person person-1">👩‍💻</div>
              <div className="person person-2">👩‍💼</div>
              <div className="robot">🤖</div>
              <div className="chat-bubble">💬</div>
              <div className="cloud cloud-1">☁️</div>
              <div className="cloud cloud-2">☁️</div>
              <div className="star star-1">⭐</div>
              <div className="star star-2">⭐</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-background">
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
      </div>
    </section>
  );
};

export default Hero;
