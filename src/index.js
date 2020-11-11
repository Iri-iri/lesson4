import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Users from './Components/Users';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Users />
  </React.StrictMode>,
  document.getElementById('root')
);
