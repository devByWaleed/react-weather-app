// Importing Necessary Components
import React from 'react';
import ReactDOM from 'react-dom/client';
import Weather from './App';
import './index.css';

// Creating Root element
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// Rendering The Component
root.render(
  <React.StrictMode>
    <Weather />
  </React.StrictMode>
);