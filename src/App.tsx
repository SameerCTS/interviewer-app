import { useState, useEffect } from 'react';
import Container from './components/Container';
import Title from './components/Title';
import RoleSelector from './components/RoleSelector';
import Accordion from './components/Accordion';
import { fetchQuestions } from './api';

const roles = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'
];

// ...static data definitions (same as before, can be moved to a types file)...

function App() {
  const [selectedRole, setSelectedRole] = useState<string>(roles[0]);
  const [displayedQuestions, setDisplayedQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchQuestionsFromApi = async (role: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchQuestions({ role, topic: undefined });
      setDisplayedQuestions(data);
    } catch (err) {
      setError('Could not load questions from server. Showing static fallback.');
      // fallback to static (implement as needed)
      setDisplayedQuestions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestionsFromApi(selectedRole);
  }, [selectedRole]);

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(e.target.value);
  };

  const handleRefresh = () => {
    fetchQuestionsFromApi(selectedRole);
  };

  return (
    <Container>
      <Title>Interviewer Question Helper</Title>
      <RoleSelector roles={roles} selectedRole={selectedRole} onChange={handleRoleChange} />
      <h2>Suggested Questions for {selectedRole}</h2>
      <button style={{marginBottom: '16px'}} onClick={handleRefresh} disabled={loading}>Show Different Questions</button>
      {loading && <p>Loading questions...</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}
      <Accordion items={displayedQuestions} />
    </Container>
  );
}

export default App;
