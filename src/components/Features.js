import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '💬',
      title: 'Mood-Aware Chat',
      description: 'AI that adapts its responses based on your current emotional state'
    },
    {
      icon: '🎭',
      title: 'Emotion Recognition',
      description: 'Advanced algorithms that understand and respond to your mood'
    },
    {
      icon: '🔗',
      title: 'n8n Integration',
      description: 'Seamless webhook integration for powerful automation workflows'
    },
    {
      icon: '📊',
      title: 'Smart Analytics',
      description: 'Track your mood patterns and chat interactions over time'
    }
  ];

  return (
    <section id="features" className="features section section-gradient">
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="section-title">MoodChat Features</h2>
          <p className="section-subtitle">
            This is a brief overview of what makes MoodChat tick
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="integration-section">
          <div className="text-center mb-6">
            <h3 className="integration-title">Ready to get started?</h3>
            <p className="integration-subtitle">
              Experience the power of mood-aware AI chat today
            </p>
          </div>
          
          <div className="integration-logos">
            <div className="logo-item">🤖</div>
            <div className="logo-item">💻</div>
            <div className="logo-item">📱</div>
            <div className="logo-item">☁️</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
