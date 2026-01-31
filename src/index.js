import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import "./index.css";
const container = document.getElementById('root');
const root = createRoot(container);
// Without strict mode
// root.render(<App />);
 
// With strict mode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);