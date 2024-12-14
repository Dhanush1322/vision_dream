import React from 'react';  // Keep only one import of React
import ReactDOM from 'react-dom/client';


import App from './App';  // Updated path to App.js


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);