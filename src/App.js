import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import MoodSelector from './components/MoodSelector';
import ChatInterface from './components/ChatInterface';
import Features from './components/Features';

function App() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [isChatStarted, setIsChatStarted] = useState(false);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  const startChat = () => {
    if (selectedMood) {
      setIsChatStarted(true);
    }
  };

  const resetChat = () => {
    setSelectedMood(null);
    setIsChatStarted(false);
  };

  return (
    <div className="App">
      <Header />
      
      {!isChatStarted ? (
        <>
          <Hero />
          <MoodSelector 
            selectedMood={selectedMood} 
            onMoodSelect={handleMoodSelect}
            onStartChat={startChat}
          />
          <Features />
        </>
      ) : (
        <ChatInterface 
          mood={selectedMood}
          onReset={resetChat}
        />
      )}
    </div>
  );
}

export default App;
