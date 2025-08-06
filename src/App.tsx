import { useState, useEffect } from 'react';
import styled from 'styled-components';
import RoleSelector from './components/RoleSelector/RoleSelector';
import Accordion from './components/Accordion/Accordion';
import { fetchQuestions } from './api';
import { staticQuestions } from './data/staticQuestions';

const roles = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Redux', 'Coding Test'
];

function App() {
  const [selectedRole, setSelectedRole] = useState<string>(roles[0]);
  const [displayedQuestions, setDisplayedQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);

  const fetchQuestionsFromApi = async (role: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchQuestions({ role, topic: undefined });
      if (Array.isArray(data) && data.length > 0) {
        setDisplayedQuestions(data);
      } else {
        setDisplayedQuestions(staticQuestions[role] || []);
        setError('No questions found from server. Showing static questions.');
        setShowError(true);
      }
    } catch (err) {
      setDisplayedQuestions(staticQuestions[role] || []);
      setError('Could not load questions from server. Showing static questions.');
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestionsFromApi(selectedRole);
  }, [selectedRole]);

  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => {
        setShowError(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showError]);

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(e.target.value);
  };

  const handleRefresh = () => {
    fetchQuestionsFromApi(selectedRole);
  };

  useEffect(() => {
    document.title = 'EvalEase – Interviewer App';
  }, []);

  return (
    <MainWrapper>
      <HeaderSection>
        <SiteTitle>EvalEase</SiteTitle>
        <SiteSubtitle>Streamline your technical interviews</SiteSubtitle>
      </HeaderSection>
      <ContentCard>
        <RoleSelector roles={roles} selectedRole={selectedRole} onChange={handleRoleChange} />
        <h2 style={{marginBottom: '16px', color: '#2d3a4a', fontWeight: 600}}>Suggested Questions for {selectedRole}</h2>
        <RefreshButton onClick={handleRefresh} disabled={loading}>Show Different Questions</RefreshButton>
        {loading && <p style={{color:'#2d72d9'}}>Loading questions...</p>}
        {error && showError && (
          <ErrorMessage className="fade-error">{error}</ErrorMessage>
        )}
        <Accordion items={displayedQuestions} />
      </ContentCard>
    </MainWrapper>
  );
}

// Styled-components for main layout
const MainWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e3eafc 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
`;

const HeaderSection = styled.header`
  width: 100%;
  padding: 48px 0 24px 0;
  text-align: center;
  background: none;
`;

const SiteTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: #2d3a4a;
  margin-bottom: 8px;
  letter-spacing: 1px;
`;

const SiteSubtitle = styled.p`
  font-size: 1.25rem;
  color: #4b5a6a;
  margin-bottom: 0;
`;

const ContentCard = styled.div`
  background: #fff;
  box-shadow: 0 4px 24px rgba(44, 62, 80, 0.08);
  border-radius: 16px;
  padding: 32px 24px;
  max-width: 700px;
  width: 100%;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const RefreshButton = styled.button`
  background: #e3eafc;
  color: #2d3a4a;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 8px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(44, 62, 80, 0.06);
  transition: background 0.2s, box-shadow 0.2s;
  &:hover:not(:disabled) {
    background: #2d3a4a;
    color: #fff;
    box-shadow: 0 4px 16px rgba(44, 62, 80, 0.12);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: #d7263d;
  font-weight: 500;
  margin: 0 0 12px 0;
  transition: opacity 0.5s;
`;

export default App;
