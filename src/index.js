import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Routes } from 'react-router-dom';

import './scss/app.scss';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Routes>
      <App/>
    </Routes>
  </React.StrictMode>,
  document.getElementById('root')
);
