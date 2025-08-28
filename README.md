<<<<<<< HEAD
# MoodChat - Mood-Based AI Chat Application

A React web application that provides personalized chat experiences based on the user's current mood. The application integrates with n8n webhooks to deliver context-aware responses.

## Features

- **Mood Selection**: Choose from 8 different moods (Happy, Sad, Excited, Calm, Anxious, Energetic, Tired, Focused)
- **AI Chat Interface**: Modern, responsive chat interface with real-time messaging
- **n8n Integration**: Seamless webhook integration for automated responses
- **Responsive Design**: Beautiful UI that works on all devices
- **Mood-Aware Responses**: AI adapts its communication style based on your selected mood

## Screenshots

The application features a modern design inspired by contemporary chat applications with:
- Gradient backgrounds and smooth animations
- Interactive mood selection cards
- Clean chat interface with user and AI messages
- Responsive layout for mobile and desktop

## Technology Stack

- **Frontend**: React 18, CSS3
- **State Management**: React Hooks
- **Styling**: Custom CSS with modern design principles
- **Integration**: n8n Webhook API
- **Build Tool**: Create React App

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mood-chat-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Select Your Mood**: Choose from the available mood options on the main page
2. **Start Chatting**: Click "Start Chatting" to begin your conversation
3. **Send Messages**: Type your messages and press Enter or click the send button
4. **Get Responses**: The AI will respond based on your selected mood
5. **Change Mood**: Click "Change Mood" to return to mood selection

## n8n Webhook Integration

The application sends messages to your n8n webhook at:
```
https://n8n.xinotrix.com/webhook/613b8ba9-b9d1-42a2-876c-2e67ddde1923
```

**Webhook Payload Format:**
```json
{
  "message": "User's message content",
  "mood": "selected_mood",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

**Expected Response Format:**
```json
{
  "response": "AI response message"
}
```

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header
│   ├── Hero.js            # Hero section with main headline
│   ├── MoodSelector.js    # Mood selection interface
│   ├── ChatInterface.js   # Main chat functionality
│   └── Features.js        # Features showcase
├── App.js                 # Main application component
├── index.js              # Application entry point
└── index.css             # Global styles
```

## Customization

### Adding New Moods
Edit `src/components/MoodSelector.js` and add new mood objects to the `moods` array:

```javascript
{ id: 'new_mood', emoji: '🎉', label: 'New Mood', color: '#FF6B6B' }
```

### Styling
Modify the CSS files in each component to customize colors, fonts, and layouts.

### Webhook URL
Update the `n8nWebhookUrl` constant in `src/components/ChatInterface.js` to point to your webhook endpoint.

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or questions, please open an issue in the repository or contact the development team.

## Future Enhancements

- User authentication and mood history
- Advanced mood analytics dashboard
- Integration with additional messaging platforms
- Voice chat capabilities
- Mood-based recommendation system
=======
# MoodChat
>>>>>>> 98d9365200e55484c1e4755643a03d8aa937d427
