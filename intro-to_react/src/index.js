import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: '0731234567'
  },
  {
    id: 2,
    name: "Alphonce Once",
    number: '0701234587'
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App persons={persons} />
  </React.StrictMode>
);
