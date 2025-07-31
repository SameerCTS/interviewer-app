
import express from 'express';
import Question from '../models/Question.js';

const router = express.Router();

// GET /api/questions?role=React&topic=JSX
router.get('/', async (req, res) => {
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

export default router;
