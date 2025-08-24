import React from 'react';
import './MoodSelector.css';

const MoodSelector = ({ selectedMood, onMoodSelect, onStartChat }) => {
  const moods = [
    { id: 'happy', emoji: '😊', label: 'Happy', color: '#FFD93D' },
    { id: 'sad', emoji: '😢', label: 'Sad', color: '#6C5CE7' },
    { id: 'excited', emoji: '🤩', label: 'Excited', color: '#FF6B6B' },
    { id: 'calm', emoji: '😌', label: 'Calm', color: '#4ECDC4' },
    { id: 'anxious', emoji: '😰', label: 'Anxious', color: '#FFA07A' },
    { id: 'energetic', emoji: '⚡', label: 'Energetic', color: '#FFD700' },
    { id: 'tired', emoji: '😴', label: 'Tired', color: '#A8E6CF' },
    { id: 'focused', emoji: '🎯', label: 'Focused', color: '#FF8C42' }
  ];

  return (
    <section id="mood-selector" className="mood-selector section section-white">
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="section-title">How are you feeling today?</h2>
          <p className="section-subtitle">
            Select your mood to get personalized chat responses
          </p>
        </div>
        
        <div className="moods-grid">
          {moods.map((mood) => (
            <div
              key={mood.id}
              className={`mood-card ${selectedMood === mood.id ? 'selected' : ''}`}
              onClick={() => onMoodSelect(mood.id)}
            >
              <div 
                className="mood-emoji"
                style={{ backgroundColor: mood.color }}
              >
                {mood.emoji}
              </div>
              <span className="mood-label">{mood.label}</span>
            </div>
          ))}
        </div>
        
        {selectedMood && (
          <div className="text-center mt-6">
            <button 
              className="btn btn-primary"
              onClick={onStartChat}
            >
              Start Chatting with {moods.find(m => m.id === selectedMood)?.label} Mood
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MoodSelector;
