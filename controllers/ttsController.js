import { textToSpeech, getAvailableVoices } from '../services/elevenlabs.js';
import fs from 'fs';
import path from 'path';

/**
 * Get all available voices
 */
export const getAllVoices = async (req, res) => {
  try {
    const voices = await getAvailableVoices();
    res.json({
      success: true,
      data: voices,
      message: 'Voices fetched successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

/**
 * Convert text to speech
 */
export const generateSpeech = async (req, res) => {
  try {
    const { text, voiceId, stability, similarityBoost } = req.body;

    if (!text || !voiceId) {
      return res.status(400).json({
        success: false,
        error: 'Text and voiceId are required',
      });
    }

    const audioBuffer = await textToSpeech(text, voiceId, {
      stability,
      similarityBoost,
    });

    // Save audio file
    const fileName = `audio_${Date.now()}.mp3`;
    const filePath = path.join('uploads', fileName);

    if (!fs.existsSync('uploads')) {
      fs.mkdirSync('uploads', { recursive: true });
    }

    fs.writeFileSync(filePath, audioBuffer);

    res.json({
      success: true,
      message: 'Speech generated successfully',
      audioFile: `/uploads/${fileName}`,
      filePath,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export default {
  getAllVoices,
  generateSpeech,
};
