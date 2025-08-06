// This script seeds the database with questions from staticQuestions in App.tsx
// Usage: node seed.js (run from the server directory)


import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Question from './models/Question.js';

dotenv.config();

const staticQuestions = {
  HTML: [
    { question: 'What are semantic HTML elements?', answer: 'Semantic HTML elements clearly describe their meaning in a human- and machine-readable way. Examples include <header>, <footer>, <article>, and <section>.', code: '<header>Site Header</header>\n<section>Main Content</section>' },
    { question: 'How do you optimize HTML for accessibility?', answer: 'Use semantic tags, ARIA attributes, alt text for images, and proper label associations to improve accessibility.', code: '<img src="logo.png" alt="Company Logo" />\n<label htmlFor="email">Email</label>\n<input id="email" type="email" />' },
    { question: 'Explain the difference between <div> and <section>.', answer: '<div> is a generic container, while <section> is a semantic element for grouping related content.', code: '<div>Generic Container</div>\n<section>Related Content</section>' }
  ],
  CSS: [
    { question: 'What is the box model?', answer: 'The box model describes how elements are rendered: content, padding, border, and margin.', code: 'div {\n  margin: 10px;\n  border: 1px solid #ccc;\n  padding: 8px;\n}' },
    { question: 'How do you create a responsive layout?', answer: 'Use media queries, flexible grids, and relative units like %, em, or rem.', code: '@media (max-width: 600px) {\n  .container {\n    flex-direction: column;\n  }\n}' },
    { question: 'Explain CSS specificity.', answer: 'Specificity determines which CSS rule applies if multiple rules match. Inline styles are most specific, followed by IDs, then classes, then elements.', code: '#main { color: red; }\n.main { color: blue; }\ndiv { color: green; }' }
  ],
  JavaScript: [
    { question: 'What is closure in JavaScript?', answer: 'A closure is a function that remembers variables from its outer scope even after the outer function has finished executing.', code: 'function outer() {\n  let count = 0;\n  return function inner() {\n    count++;\n    return count;\n  }\n}' },
    { question: 'Explain event delegation.', answer: 'Event delegation allows you to handle events at a parent level instead of individual child elements, improving performance.', code: "document.querySelector('ul').addEventListener('click', function(e) {\n  if (e.target.tagName === 'LI') {\n    // handle click\n  }\n});" },
    { question: 'What are promises and how do you use them?', answer: 'Promises represent asynchronous operations. Use .then() and .catch() to handle results and errors.', code: "fetch('/api/data')\n  .then(res => res.json())\n  .then(data => console.log(data))\n  .catch(err => console.error(err));" }
  ],
  TypeScript: [
    { question: 'What are TypeScript interfaces?', answer: 'Interfaces define the shape of objects, specifying property names and types.', code: 'interface User {\n  name: string;\n  age: number;\n}' },
    { question: 'How does TypeScript improve code quality?', answer: 'TypeScript adds static type checking, catching errors at compile time and improving maintainability.', code: "let age: number = 25;\nage = 'twenty'; // Error" },
    { question: 'Explain type narrowing.', answer: 'Type narrowing uses control flow to infer more specific types for variables.', code: 'function printId(id: number | string) {\n  if (typeof id === \'string\') {\n    console.log(id.toUpperCase());\n  } else {\n    console.log(id);\n  }\n}' }
  ],
  React: [
    { concept: 'Creating and nesting components', question: 'How do you create and nest components in React?', answer: 'You create a component by writing a JavaScript function that returns JSX. You can nest components by using them inside other components.', code: `function MyButton() {\n  return <button>I\\'m a button</button>;\n}\n\nexport default function MyApp() {\n  return (\n    <div>\n      <h1>Welcome to my app</h1>\n      <MyButton />\n    </div>\n  );\n}` },
    { concept: 'Writing markup with JSX', question: 'What is JSX and how is it different from HTML?', answer: 'JSX is a syntax extension for JavaScript that looks similar to HTML but allows you to embed JavaScript expressions. JSX tags must be closed and wrapped in a single parent element.', code: `function AboutPage() {\n  return (\n    <>\n      <h1>About</h1>\n      <p>Hello there.<br />How do you do?</p>\n    </>\n  );\n}` },
    { concept: 'Adding styles', question: 'How do you add styles to React components?', answer: 'You can use the className attribute to assign CSS classes, or use inline styles with the style attribute.', code: `function Avatar() {\n  const user = {\n    name: 'Hedy Lamarr',\n    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',\n    imageSize: 90\n  };\n  return (\n    <img\n      className=\"avatar\"\n      src={user.imageUrl}\n      alt={\`Photo of \`}\n      style={{ width: user.imageSize, height: user.imageSize }}\n    />\n  );\n}` }
  ]
};


async function seed() {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/interviewer-app';
  await mongoose.connect(uri);
  console.log('Connected to MongoDB');

  await Question.deleteMany({});
  console.log('Cleared existing questions');

  const docs = [];
  for (const role in staticQuestions) {
    for (const q of staticQuestions[role]) {
      docs.push({
        role,
        question: q.question,
        answer: q.answer,
        code: q.code || '',
        concept: q.concept || '',
      });
    }
  }

  await Question.insertMany(docs);
  console.log('Seeded questions');
  await mongoose.disconnect();
  console.log('Disconnected');
}

seed().catch(e => {
  console.error(e);
  process.exit(1);
});
