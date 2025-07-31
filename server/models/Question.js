
import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
  role: { type: String, required: true },
  question: { type: String, required: true },
  answer: { type: String, required: true },
  code: { type: String },
  concept: { type: String },
});

const Question = mongoose.models.Question || mongoose.model('Question', QuestionSchema);
export default Question;
