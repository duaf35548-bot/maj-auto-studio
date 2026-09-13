import axios from 'axios';

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const ELEVENLABS_BASE_URL = 'https://api.elevenlabs.io/v1';

/**
 * Get all available voices from ElevenLabs
 */
export const getAvailableVoices = async () => {
  try {
    const response = await axios.get(`${ELEVENLABS_BASE_URL}/voices`, {
      headers: {
        'xi-api-key': ELEVENLABS_API_KEY,
      },
    });
    return response.data.voices;
  } catch (error) {
    console.error('Error fetching voices:', error.message);
    throw new Error('Failed to fetch ElevenLabs voices');
  }
};

/**
 * Convert text to speech using ElevenLabs
 * @param {string} text - Text to convert
 * @param {string} voiceId - Voice ID from ElevenLabs
 * @param {object} options - Additional options
 */
export const textToSpeech = async (text, voiceId, options = {}) => {
  try {
    const response = await axios.post(
      `${ELEVENLABS_BASE_URL}/text-to-speech/${voiceId}`,
      {
        text,
        model_id: options.modelId || 'eleven_monolingual_v1',
        voice_settings: {
          stability: options.stability || 0.5,
          similarity_boost: options.similarityBoost || 0.75,
        },
      },
      {
        headers: {
          'xi-api-key': ELEVENLABS_API_KEY,
          'Content-Type': 'application/json',
        },
        responseType: 'arraybuffer',
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error in text-to-speech:', error.message);
    throw new Error('Failed to generate speech');
  }
};

/**
 * Clone a voice from audio file
 * @param {string} voiceName - Name for the cloned voice
 * @param {Buffer} audioBuffer - Audio file buffer
 */
export const cloneVoice = async (voiceName, audioBuffer) => {
  try {
    const formData = new FormData();
    formData.append('name', voiceName);
    formData.append('files', new Blob([audioBuffer], { type: 'audio/mpeg' }), 'voice.mp3');

    const response = await axios.post(
      `${ELEVENLABS_BASE_URL}/voices/add`,
      formData,
      {
        headers: {
          'xi-api-key': ELEVENLABS_API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error cloning voice:', error.message);
    throw new Error('Failed to clone voice');
  }
};

export default {
  getAvailableVoices,
  textToSpeech,
  cloneVoice,
};
