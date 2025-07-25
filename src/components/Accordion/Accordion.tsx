import React, { useState } from 'react';
import { AccordionItem, QuestionHeader, Arrow, AnswerPanel, CodeBox, CopyButton } from './Accordion.styles';

type Question = {
  question?: string;
  answer?: string;
  code?: string;
  reference?: string;
  concept?: string;
};

interface AccordionProps {
  items: Question[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleCopy = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1200);
  };

  // Reference links for each topic/question
  const referenceLinks: Record<string, Record<string, string>> = {
    'React': {
      'Creating and nesting components': 'https://react.dev/learn/components-and-props',
      'Writing markup with JSX': 'https://react.dev/learn/writing-markup-with-jsx',
      'Adding styles': 'https://react.dev/learn/adding-styles',
      'Displaying data': 'https://react.dev/learn/displaying-data',
      'Conditional rendering': 'https://react.dev/learn/conditional-rendering',
      'Rendering lists': 'https://react.dev/learn/rendering-lists',
      'Responding to events': 'https://react.dev/learn/responding-to-events',
      'Updating the screen': 'https://react.dev/learn/updating-the-screen',
      'Using Hooks': 'https://react.dev/learn/using-hooks',
      'Sharing data between components': 'https://react.dev/learn/sharing-data-between-components',
    },
    'HTML': {
      'What are semantic HTML elements?': 'https://developer.mozilla.org/en-US/docs/Glossary/Semantics',
      'How do you optimize HTML for accessibility?': 'https://developer.mozilla.org/en-US/docs/Web/Accessibility',
      'Explain the difference between <div> and <section>.': 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section',
    },
    'CSS': {
      'What is the box model?': 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model',
      'How do you create a responsive layout?': 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design',
      'Explain CSS specificity.': 'https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity',
    },
    'JavaScript': {
      'What is closure in JavaScript?': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures',
      'Explain event delegation.': 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_delegation',
      'What are promises and how do you use them?': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises',
    },
    'TypeScript': {
      'What are TypeScript interfaces?': 'https://www.typescriptlang.org/docs/handbook/interfaces.html',
      'How does TypeScript improve code quality?': 'https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html',
      'Explain type narrowing.': 'https://www.typescriptlang.org/docs/handbook/2/narrowing.html',
    },
  };

  // Infer topic for reference lookup
  const getTopic = () => {
    if (!items || items.length === 0) return null;
    if (items[0].concept) return 'React';
    if (items[0].question && items[0].question.toLowerCase().includes('html')) return 'HTML';
    if (items[0].question && items[0].question.toLowerCase().includes('css')) return 'CSS';
    if (items[0].question && items[0].question.toLowerCase().includes('typescript')) return 'TypeScript';
    if (items[0].question && items[0].question.toLowerCase().includes('javascript')) return 'JavaScript';
    // fallback: try to match by role name
    return null;
  };
  const topic = getTopic();

  return (
    <div>
      {items.map((q, idx) => {
        // Prefer item-specific reference, else fallback to topic/question mapping
        let docLink = q.reference || null;
        if (!docLink) {
          if (topic && referenceLinks[topic] && referenceLinks[topic][q.question!]) {
            docLink = referenceLinks[topic][q.question!];
          } else if (topic === 'React' && q.concept && referenceLinks.React[q.concept]) {
            docLink = referenceLinks.React[q.concept];
          }
        }
        return (
          <AccordionItem key={idx}>
            <QuestionHeader onClick={() => setOpenIdx(openIdx === idx ? null : idx)}>
              <span>Q: {q.question}</span>
              <Arrow style={{ transform: openIdx === idx ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                ▶
              </Arrow>
            </QuestionHeader>
            {openIdx === idx && (
              <AnswerPanel>
                <strong>A:</strong> {q.answer}<br />
                {docLink && (
                  <a href={docLink} target="_blank" rel="noopener noreferrer" style={{color:'#2d72d9',fontSize:'0.95em',display:'inline-block',margin:'8px 0'}}>
                    Read more
                  </a>
                )}
                {q.code && (
                  <CodeBox>
                    <CopyButton onClick={e => { e.stopPropagation(); handleCopy(q.code!, idx); }}>
                      {copiedIdx === idx ? 'Copied!' : 'Copy'}
                    </CopyButton>
                    {q.code}
                  </CodeBox>
                )}
              </AnswerPanel>
            )}
          </AccordionItem>
        );
      })}
    </div>
  );
};

export default Accordion;
