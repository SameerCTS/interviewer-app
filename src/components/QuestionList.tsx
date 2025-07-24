import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;
const Item = styled.li`
  background: #eaf1fb;
  margin-bottom: 8px;
  padding: 8px 16px;
  border-radius: 8px;
  color: #2d72d9;
  font-weight: 500;
`;

type Question = {
  question?: string;
  answer?: string;
  code?: string;
};

interface QuestionListProps {
  questions: (Question | string)[];
  isReact?: boolean;
}

const QuestionList: React.FC<QuestionListProps> = ({ questions, isReact }) => (
  <List>
    {isReact
      ? questions.map((q, idx) => {
          if (typeof q === 'string') return <Item key={idx}>{q}</Item>;
          return (
            <Item key={idx}>
              <strong>Q:</strong> {q.question}<br />
              <strong>A:</strong> {q.answer}<br />
              {q.code && (
                <pre style={{background:'#f4f4f4',padding:'8px',borderRadius:'6px',marginTop:'6px',fontSize:'0.95em'}}>
                  {q.code}
                </pre>
              )}
            </Item>
          );
        })
      : questions.map((q, idx) => (
          <Item key={idx}>{typeof q === 'string' ? q : q.question}</Item>
        ))}
  </List>
);

export default QuestionList;
