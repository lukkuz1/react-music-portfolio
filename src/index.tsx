import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router

// Define the type for the root element
const rootElement = document.getElementById('root');

// Check if the element exists (null check for TypeScript safety)
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement as HTMLElement);

  root.render(
    <React.StrictMode>
      <Router>  {/* Wrap the entire app with Router */}
        <App />
      </Router>
    </React.StrictMode>
  );
}
