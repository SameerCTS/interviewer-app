// EvalEase: Interviewer App Static Questions
export const staticQuestions: Record<string, { question: string; answer: string }[]> = {
  HTML: [
    { question: 'What is a semantic HTML element?', answer: 'Semantic HTML elements are those that clearly describe their meaning in both human and machine-readable ways. For example, <header>, <footer>, <article>, and <section> all indicate the type of content they contain, which helps browsers, search engines, and assistive technologies understand the structure and purpose of your page. (EvalEase)' },
    { question: 'How do you make an image accessible?', answer: 'To make an image accessible, always provide descriptive alt text that conveys the purpose or content of the image. This helps users who rely on screen readers understand what the image represents. Avoid using images of text, and ensure decorative images have empty alt attributes (alt="").' },
    { question: 'Explain the difference between <section> and <article>.', answer: '<section> is used to group related content together, such as chapters or thematic groups, while <article> is for self-contained, independent content that could be distributed or reused, like a blog post or news story.' },
    { question: 'How do you improve SEO with HTML?', answer: 'Improving SEO with HTML involves using semantic tags to structure your content, including headings (<h1> to <h6>), meta tags for descriptions and keywords, and proper use of <title>. Semantic markup helps search engines better understand your content and rank it appropriately.' },
    { question: 'What is the purpose of ARIA attributes?', answer: 'ARIA (Accessible Rich Internet Applications) attributes provide additional information to assistive technologies about the roles, states, and properties of elements. They are especially useful for making dynamic content and custom UI components accessible to users with disabilities.' },
    { question: 'How do you create a form in HTML?', answer: 'To create a form, use the <form> element and include input fields like <input>, <textarea>, <select>, and <button>. Always use <label> elements associated with inputs for accessibility, and consider using fieldsets and legends for grouping related fields.' },
    { question: 'What is the difference between <div> and <span>?', answer: '<div> is a block-level element used for grouping larger sections of content, while <span> is an inline element for styling or grouping small portions of text within a block.' },
    { question: 'How do you embed a video in HTML?', answer: 'Use the <video> tag with the src attribute pointing to your video file, and include controls for playback. You can also provide multiple source formats and a fallback message for unsupported browsers.' },
    { question: 'What is the use of the <header> and <footer> tags?', answer: '<header> defines introductory content or navigation links for a section or page, while <footer> contains closing content, such as copyright information, contact details, or related links.' },
    { question: 'How do you make a table accessible?', answer: 'To make tables accessible, use <caption> to describe the table, <th> for header cells, and scope attributes to clarify relationships. Ensure tables are used for tabular data only, not layout.' }
  ],
  CSS: [
    { question: 'What is the CSS box model?', answer: 'The CSS box model describes how elements are rendered on the page. Every element is a rectangular box composed of four areas: content, padding, border, and margin. Understanding the box model is essential for controlling layout, spacing, and sizing of elements.' },
    { question: 'How do you center a div horizontally?', answer: 'To center a block-level div horizontally, set a fixed width and use margin: 0 auto;. For flexbox layouts, use justify-content: center on the parent container.' },
    { question: 'Explain CSS specificity.', answer: 'CSS specificity is a set of rules browsers use to determine which styles are applied to an element. It is based on the types of selectors used (inline, ID, class, element) and their order. More specific selectors override less specific ones.' },
    { question: 'How do you create a responsive layout?', answer: 'Responsive layouts adapt to different screen sizes using media queries, flexible grids, and relative units like %, em, or rem. CSS frameworks and techniques like Flexbox and Grid also help build responsive designs.' },
    { question: 'What is Flexbox and when would you use it?', answer: 'Flexbox is a one-dimensional layout model for arranging items in rows or columns. It is ideal for building dynamic layouts that adjust to available space, such as navigation bars or card layouts.' },
    { question: 'How do you use CSS Grid?', answer: 'CSS Grid is a two-dimensional layout system that allows you to create complex layouts with rows and columns. You define grid containers and place items using grid-area, grid-row, and grid-column properties.' },
    { question: 'What is a CSS preprocessor?', answer: 'A CSS preprocessor like SASS or LESS adds features such as variables, nesting, and mixins to CSS, making it easier to write and maintain large stylesheets. The preprocessor compiles to standard CSS.' },
    { question: 'How do you animate elements in CSS?', answer: 'CSS animations use @keyframes to define the animation steps and the animation property to apply them. Transitions can also animate changes in CSS properties.' },
    { question: 'How do you hide an element visually but keep it accessible?', answer: 'To hide an element visually but keep it accessible to screen readers, use CSS like position: absolute; left: -9999px;, or use the visually-hidden utility class. Avoid display: none, which removes the element from the accessibility tree.' },
    { question: 'What is the difference between inline, block, and inline-block?', answer: 'Block elements start on a new line and take up the full width, inline elements flow within text, and inline-block elements combine characteristics of both, allowing width and height to be set.' }
  ],
  JavaScript: [
    { question: 'What is a closure?', answer: 'A closure is a function that retains access to its outer scope, even after the outer function has finished executing. This allows functions to remember and access variables from their lexical environment, enabling powerful patterns like data encapsulation and factory functions.' },
    { question: 'How do you declare a variable?', answer: 'Variables in JavaScript can be declared using var, let, or const. var is function-scoped and can be redeclared, let is block-scoped and can be reassigned, and const is block-scoped and cannot be reassigned.' },
    { question: 'Explain event delegation.', answer: 'Event delegation is a technique where a single event listener is attached to a parent element to handle events for its child elements. This improves performance and simplifies code, especially for dynamic lists.' },
    { question: 'What is the difference between == and ===?', answer: '== compares values with type coercion, meaning it converts types if necessary before comparing. === compares both value and type strictly, so no conversion occurs.' },
    { question: 'How do you handle asynchronous code?', answer: 'Asynchronous code can be managed using callbacks, promises, or async/await. Promises represent future values, and async/await provides a cleaner syntax for working with promises.' },
    { question: 'What is a promise?', answer: 'A promise is an object representing the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, and rejected, and provides .then() and .catch() methods for handling results.' },
    { question: 'Explain the concept of hoisting.', answer: 'Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their containing scope during compilation. Only declarations are hoisted, not initializations.' },
    { question: 'What is the prototype chain?', answer: 'The prototype chain is a mechanism by which objects inherit properties and methods from other objects. Every object has a prototype, and property lookups traverse up the chain until found or null is reached.' },
    { question: 'How do you deep clone an object?', answer: 'Deep cloning creates a copy of an object and all nested objects. Methods include structuredClone (modern), JSON.parse(JSON.stringify(obj)), or using libraries like lodash.' },
    { question: 'What is a pure function?', answer: 'A pure function always returns the same output for the same input and has no side effects, making it predictable and easier to test.' }
  ],
  TypeScript: [
    { question: 'What is a TypeScript interface?', answer: 'A TypeScript interface defines the shape of an object, specifying property names and types. Interfaces are used for type-checking and can be extended or implemented by classes.' },
    { question: 'How do you specify a variable type?', answer: 'You specify a variable type by adding a colon and the type after the variable name, e.g., let age: number = 25;.' },
    { question: 'What is type narrowing?', answer: 'Type narrowing uses control flow (like if statements) to infer more specific types for variables, allowing safer property access and operations.' },
    { question: 'How do you use generics in TypeScript?', answer: 'Generics allow you to write reusable, type-safe code by parameterizing types. For example, function identity<T>(arg: T): T { return arg; }.' },
    { question: 'What is an enum in TypeScript?', answer: 'An enum is a way to define a set of named constants, which can be numeric or string values. Enums improve code readability and intent.' },
    { question: 'How do you use type aliases?', answer: 'Type aliases use the type keyword to create custom types, e.g., type Point = { x: number; y: number; };.' },
    { question: 'What is the difference between interface and type?', answer: 'Interfaces are primarily for object shapes and can be extended or merged, while types are more flexible and can represent primitives, unions, and intersections.' },
    { question: 'How do you handle optional properties?', answer: 'Optional properties are marked with a ? after the property name, e.g., interface User { name: string; age?: number; }.' },
    { question: 'What is declaration merging?', answer: 'Declaration merging allows TypeScript to combine multiple declarations for the same name, especially useful for interfaces and modules.' },
    { question: 'How do you use utility types like Partial and Pick?', answer: 'Utility types like Partial<T> and Pick<T, K> help create new types based on existing ones, making code more flexible and reusable.' }
  ],
  React: [
    { question: 'What is a React component?', answer: 'A React component is a reusable piece of UI, defined as a function or class. Components accept props and manage their own state, allowing you to build complex interfaces from simple building blocks.' },
    { question: 'How do you pass props?', answer: 'Props are passed to components as attributes in JSX. They allow you to customize and configure components, making them reusable and dynamic.' },
    { question: 'What is state in React?', answer: 'State is data managed within a component. It determines how the component renders and behaves. State changes trigger re-renders, allowing dynamic updates to the UI.' },
    { question: 'How do you use useEffect?', answer: 'useEffect is a React hook for running side effects in function components, such as data fetching, subscriptions, or manual DOM updates. It runs after render and can clean up when dependencies change or the component unmounts.' },
    { question: 'What is the virtual DOM?', answer: 'The virtual DOM is a lightweight copy of the real DOM. React uses it to efficiently determine what has changed and update only the necessary parts of the UI, improving performance.' },
    { question: 'How do you lift state up?', answer: 'Lifting state up means moving state to a common ancestor component so that multiple child components can share and update the same data.' },
    { question: 'What are React hooks?', answer: 'React hooks are functions like useState, useEffect, and useContext that let you use state and other React features in function components. They simplify code and encourage best practices.' },
    { question: 'How do you memoize a component?', answer: 'Memoization prevents unnecessary re-renders by caching the result of a component or function. Use React.memo for components and useMemo for values or functions.' },
    { question: 'What is context in React?', answer: 'Context provides a way to pass data through the component tree without having to pass props down manually at every level. It is useful for global data like themes or authentication.' },
    { question: 'How do you handle forms in React?', answer: 'Forms in React are usually handled with controlled components, where form data is managed in state and updated via event handlers. This approach provides full control over form validation and submission.' }
  ],

  Redux: [
    { question: 'What is Redux and why is it used?', answer: 'Redux is a predictable state container for JavaScript apps, commonly used with React. It helps manage application state in a single store, making state changes predictable and easier to debug.' },
    { question: 'Explain the core principles of Redux.', answer: 'Redux is based on three principles: (1) Single source of truth (the state is stored in one object tree), (2) State is read-only (the only way to change state is to emit an action), and (3) Changes are made with pure functions (reducers).' },
    { question: 'What are actions and reducers in Redux?', answer: 'Actions are plain objects that describe what happened, and reducers are pure functions that take the previous state and an action, and return the next state.' },
    { question: 'How does Redux middleware work?', answer: 'Middleware in Redux intercepts dispatched actions before they reach the reducer. It is used for logging, crash reporting, performing async operations, and more. Common middlewares include redux-thunk and redux-saga.' },
    { question: 'What is Redux Toolkit?', answer: 'Redux Toolkit is the official, recommended way to write Redux logic. It simplifies store setup, reduces boilerplate, and provides utilities like createSlice, createAsyncThunk, and configureStore.' },
    { question: 'How do you use createSlice in Redux Toolkit?', answer: 'createSlice lets you define reducers and actions together. You specify a name, initial state, and reducer functions, and it automatically generates action creators and action types.' },
    { question: 'What is the purpose of createAsyncThunk?', answer: 'createAsyncThunk is a utility in Redux Toolkit for handling async logic, such as API calls. It generates pending, fulfilled, and rejected action types for async operations.' },
    { question: 'How do you connect Redux to a React component?', answer: 'You can use the useSelector and useDispatch hooks from react-redux to read state and dispatch actions in function components. For class components, connect() HOC is used.' },
    { question: 'What are some common use cases for Redux middleware?', answer: 'Common use cases include handling asynchronous actions (redux-thunk, redux-saga), logging actions, error reporting, and routing (connected-react-router).' },
    { question: 'How do you structure a large Redux application?', answer: 'Organize code by feature (ducks pattern), use Redux Toolkit for slices, keep actions and reducers together, and use middleware for side effects. Consider splitting state into logical domains and using selectors for derived data.' }
  ],

  ['Coding Test']: [
    {
      question: 'Build a dynamic form generator',
      answer: `Implement a React component that takes a JSON schema and renders a form with validation, supporting various field types (text, number, select, checkbox, etc.). The form should handle state, validation, and submission.\n\nSteps to accomplish:\n1. Create a React component that accepts a JSON schema as a prop.\n2. Parse the schema to determine the fields and their types.\n3. Render form fields dynamically based on the schema (e.g., input, select, checkbox).\n4. Manage form state using useState or useReducer.\n5. Implement basic validation (e.g., required fields, type checks).\n6. Display validation errors next to the relevant fields.\n7. Handle form submission and display the submitted data or a success message.\n\n<img src='https://raw.githubusercontent.com/github/copilot-images/main/form-generator-ux.png' alt='Form Generator UX Example' style='max-width:100%;border-radius:8px;margin:16px 0;' />\n\n*Description:*\nA clean React form generator UI. The form displays fields based on a JSON schema, including text, number, select, and checkbox inputs. Each field is labeled, with required fields marked. Validation errors appear below fields. The submit button is styled and disabled until the form is valid. The layout uses a card-style container with padding and spacing for clarity. (EvalEase)`
    },
    {
      question: 'Create a sortable and filterable data table',
      answer: `Build a reusable data table component in React that supports sorting by columns, filtering by search input, and pagination. The table should be styled and accessible.\n\nSteps to accomplish:\n1. Create a DataTable component that accepts data and column definitions as props.\n2. Render the table headers and rows based on the provided data.\n3. Add sorting functionality: clicking a header sorts the table by that column.\n4. Add a search input to filter rows by keyword.\n5. Implement pagination to show a limited number of rows per page.\n6. Style the table for readability and accessibility (use styled-components).\n7. Ensure keyboard navigation and screen reader support.`
    },
    {
      question: 'Implement a drag-and-drop Kanban board',
      answer: `Develop a Kanban board UI in React where users can drag and drop cards between columns. The board should support adding, editing, and deleting cards, and persist state in localStorage.\n\nSteps to accomplish:\n1. Set up the Kanban board structure with columns (e.g., To Do, In Progress, Done).\n2. Create card components for tasks.\n3. Implement drag-and-drop functionality to move cards between columns (use a library like react-beautiful-dnd or custom logic).\n4. Add features to add, edit, and delete cards.\n5. Persist the board state in localStorage so changes are saved across reloads.\n6. Style the board and cards for clarity and usability.\n7. Test the board to ensure all features work smoothly.`
    },
    {
      question: 'Build a custom modal and notification system',
      answer: 'Create a modal component and a notification (toast) system in React. Modals should support custom content and actions, and notifications should be stackable, dismissible, and animated.'
    },
    {
      question: 'Design a theme switcher with context and styled-components',
      answer: 'Implement a theme switcher (light/dark mode) using React context and styled-components. The switcher should update styles across the app and persist the selected theme.'
    }
  ]
};
