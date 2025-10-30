// Importing Necessary Components
import React from 'react';
import ReactDOM from 'react-dom/client';
import Weather from './App';
import './index.css';
import { ToastContainer } from 'react-toastify';

// Creating Root element
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// Rendering The Component
root.render(
  <React.StrictMode>
    <Weather />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      // closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  </React.StrictMode>
);