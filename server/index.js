
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Question from './models/Question.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/interviewer-app';

app.use(cors());
app.use(express.json());

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Get questions by role (and optionally topic)
app.get('/api/questions', async (req, res) => {
  try {
    const { role, topic } = req.query;
    const filter = {};
    if (role) filter.role = role;
    if (topic) filter.concept = topic;
    const questions = await Question.find(filter);
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
