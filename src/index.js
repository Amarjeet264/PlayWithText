import React from 'react';
import ReactDOM from 'react-dom/client'; // Change this line

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // Update this line
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
