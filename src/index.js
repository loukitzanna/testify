import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './main.scss';

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);