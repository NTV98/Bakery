import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import env from './config/env';

// Log environment configuration for debugging
console.log('Environment configuration:', env);

// Use PUBLIC_URL as basename for GitHub Pages deployment
const basename = process.env.PUBLIC_URL || '/Bakery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename={basename}>
      <App />
    </Router>
  </React.StrictMode>
);