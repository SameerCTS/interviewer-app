import styled from 'styled-components';

export const AccordionItem = styled.div`
  margin-bottom: 12px;
  border-radius: 8px;
  background: #f6f8fa;
  box-shadow: 0 2px 8px rgba(45,114,217,0.08);
`;
export const QuestionHeader = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  font-weight: bold;
  color: #2d72d9;
  border-bottom: 1px solid #eaf1fb;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Arrow = styled.span`
  display: inline-block;
  margin-left: 8px;
  transition: transform 0.2s;
  font-size: 1.2em;
`;
export const AnswerPanel = styled.div`
  padding: 12px 16px;
  background: #fff;
  border-radius: 0 0 8px 8px;
`;
export const CodeBox = styled.pre`
  background: #f4f4f4;
  padding: 8px;
  border-radius: 6px;
  margin-top: 6px;
  font-size: 0.95em;
  position: relative;
`;
export const CopyButton = styled.button`
  position: absolute;
  top: 6px;
  right: 8px;
  background: #2d72d9;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 2px 8px;
  font-size: 0.85em;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
`;
