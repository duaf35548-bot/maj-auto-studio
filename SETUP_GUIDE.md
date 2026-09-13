# 📖 MAJ Auto Studio - Complete Setup Guide

## Installation Steps for Malik Ahmad

### Step 1: Download & Setup

```bash
# Clone the repository
git clone https://github.com/duaf35548-bot/maj-auto-studio.git
cd maj-auto-studio

# Install all dependencies
npm install
```

### Step 2: Get ElevenLabs API Key

1. Visit: https://elevenlabs.io
2. Click "Sign Up" → Create free account
3. Go to "Profile" → "API Key"
4. Copy the API key

### Step 3: Configure Environment

```bash
# Copy template
cp .env.example .env

# Edit .env file and add:
ELEVENLABS_API_KEY=your_copied_api_key_here
PORT=5000
NODE_ENV=development
```

### Step 4: Run the Server

```bash
# Development mode (with auto-reload)
npm run dev

# Or production mode
npm start
```

You should see:
```
🎬 MAJ Auto Studio running on port 5000
📍 http://localhost:5000
```

### Step 5: Test the API

Open your browser or use Postman:

**Test Health:**
```
GET http://localhost:5000/health
```

**Get Available Voices:**
```
GET http://localhost:5000/api/tts/voices
```

**Generate Speech:**
```
POST http://localhost:5000/api/tts/generate
Body:
{
  "text": "Hello, this is MAJ Auto Studio",
  "voiceId": "21m00Tcm4TlvDq8ikWAM",
  "stability": 0.5
}
```

---

## 🔧 Troubleshooting

### Problem: "ELEVENLABS_API_KEY is not defined"
**Solution:** Make sure you added the key to `.env` file and restarted the server.

### Problem: "Cannot find module 'express'"
**Solution:** Run `npm install` again

### Problem: Port 5000 already in use
**Solution:** Change PORT in `.env` to 5001, 5002, etc.

---

## 📱 Next Steps

1. ✅ Server is running
2. 🔜 Install React frontend
3. 🔜 Build UI components
4. 🔜 Add database (MongoDB)
5. 🔜 Deploy to cloud

---

## 📞 Need Help?

Email: malik@majautostudio.com
GitHub Issues: https://github.com/duaf35548-bot/maj-auto-studio/issues

**Let's build something amazing! 🚀**
