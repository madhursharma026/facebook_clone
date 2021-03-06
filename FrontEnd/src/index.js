import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Routing from './Routing';

ReactDOM.render(
  <React.StrictMode >
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
