import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Routes
app.use('/api/auth', (req, res) => {
  res.json({ message: 'Auth routes coming soon' });
});

app.use('/api/tts', (req, res) => {
  res.json({ message: 'Text-to-Speech routes coming soon' });
});

app.use('/api/voice-clone', (req, res) => {
  res.json({ message: 'Voice Clone routes coming soon' });
});

app.use('/api/captions', (req, res) => {
  res.json({ message: 'Caption generation routes coming soon' });
});

app.use('/api/scripts', (req, res) => {
  res.json({ message: 'Script generation routes coming soon' });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'MAJ Auto Studio is running! 🚀' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🎬 MAJ Auto Studio running on port ${PORT}`);
  console.log(`📍 http://localhost:${PORT}`);
});
