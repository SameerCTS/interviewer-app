// Simple API utility for fetching questions from backend
export async function fetchQuestions({ role, topic }) {
  const params = new URLSearchParams();
  if (role) params.append('role', role);
  if (topic) params.append('topic', topic);
  const res = await fetch(`/api/questions?${params.toString()}`);
  if (!res.ok) throw new Error('Failed to fetch questions');
  return res.json();
}
