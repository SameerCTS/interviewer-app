import React from 'react';
import { List, Item } from './QuestionList.styles';

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
