import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Menu from './components/Menu'
import Tabselect from './components/Tabselect'
import Eloboostking from './components/Eloboostking';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Questions from './components/Questions';
import Frecuentesquest from './components/Frecuentesquest';
import Backgroundtabselect from './components/Backgroundtabselect';


ReactDOM.render(
  <React.StrictMode>  
    <Menu />
    <Eloboostking />
    <Backgroundtabselect />
    <Tabselect />
    <Questions />
    <Frecuentesquest />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
