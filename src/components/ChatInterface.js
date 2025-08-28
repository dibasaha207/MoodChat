import React, { useState, useRef, useEffect } from 'react';
import './ChatInterface.css';

const ChatInterface = ({ mood, onReset }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  
  const n8nWebhookUrl = 'https://n8n.xinotrix.com/webhook/613b8ba9-b9d1-42a2-876c-2e67ddde1923';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Add welcome message when chat starts
    if (mood) {
      const moodLabels = {
        happy: 'Happy',
        sad: 'Sad',
        excited: 'Excited',
        calm: 'Calm',
        anxious: 'Anxious',
        energetic: 'Energetic',
        tired: 'Tired',
        focused: 'Focused'
      };
      
      setMessages([
        {
          id: 1,
          text: `Hello! I'm your mood-aware AI companion. I can see you're feeling ${moodLabels[mood]} today. How can I help you?`,
          sender: 'ai',
          timestamp: new Date().toLocaleTimeString()
        }
      ]);
    }
  }, [mood]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: String(inputMessage.trim()),
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch(n8nWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputMessage,
          mood: mood,
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        let data;
        const contentType = response.headers.get('content-type');
        
        if (contentType && contentType.includes('application/json')) {
          data = await response.json();
        } else {
          // Handle plain text responses
          const textResponse = await response.text();
          data = { response: textResponse };
        }
        
        console.log('Webhook response:', data); // Debug log
        
        // Handle different possible response formats
        let responseText = "I'm processing your message. Please wait a moment...";
        
        if (data && data.output) {
          // Handle n8n webhook response format
          responseText = data.output;
        } else if (data && data.response) {
          responseText = data.response;
        } else if (data && data.message) {
          responseText = data.message;
        } else if (data && data.text) {
          responseText = data.text;
        } else if (data && typeof data === 'string') {
          responseText = data;
        } else if (data && typeof data === 'object' && Object.keys(data).length > 0) {
          // If it's an object, try to extract any text content
          responseText = JSON.stringify(data);
        } else if (data && typeof data === 'object' && Object.keys(data).length === 0) {
          responseText = "I received your message but got an empty response. Please try again.";
        }
        
        const aiMessage = {
          id: Date.now() + 1,
          text: String(responseText),
          sender: 'ai',
          timestamp: new Date().toLocaleTimeString()
        };
        setMessages(prev => [...prev, aiMessage]);
      } else {
        throw new Error('Failed to get response');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        id: Date.now() + 1,
        text: String(`I'm sorry, I'm having trouble connecting right now. Error: ${error.message}. Please try again in a moment.`),
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div id="chat" className="chat-interface">
      <div className="chat-header">
        <div className="chat-header-content">
          <h2>MoodChat - {mood.charAt(0).toUpperCase() + mood.slice(1)} Mode</h2>
          <button className="btn btn-secondary" onClick={onReset}>
            Change Mood
          </button>
        </div>
      </div>
      
      <div className="chat-container">
        <div className="messages-container">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message ${message.sender === 'user' ? 'user-message' : 'ai-message'}`}
            >
              <div className="message-content">
                <div className="message-text">{message.text}</div>
                <div className="message-timestamp">{message.timestamp}</div>
              </div>
              {/* <div className="message-avatar">
                {message.sender === 'user' ? '👤' : '🤖'}
              </div> */}
            </div>
          ))}
          {isLoading && (
            <div className="message ai-message">
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              {/* <div className="message-avatar">🤖</div> */}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="chat-input-container">
          <div className="chat-input-wrapper">
            <textarea
              className="chat-input"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here..."
              rows="1"
              disabled={isLoading}
            />
            <button
              className="send-button"
              onClick={sendMessage}
              disabled={!inputMessage.trim() || isLoading}
            >
              ➤
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
