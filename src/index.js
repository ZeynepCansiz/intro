import React from 'react';
import ReactDOM from 'react-dom'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import LP from './landingPage';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/LP" element={<LP />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
