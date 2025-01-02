import React from 'react';
import ReactDOM from 'react-dom/client';  // Notice the change here
import App from './App';

// Find the root element
const rootElement = document.getElementById('root');

// Use createRoot to initialize the app
const root = ReactDOM.createRoot(rootElement);

// Render the app
root.render(<App />);