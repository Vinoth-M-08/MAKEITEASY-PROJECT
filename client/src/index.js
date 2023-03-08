import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Signup from './login/signup';
import App from './login/Display/display';
import Deleteform from './login/Display/Delete/delete';
import View from './login/Display/displayc';
import Nee from './App';
import Diss from './login/Display/display';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UpdateForm from './login/update/update';
import Intro from './login/Layout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Intro/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
