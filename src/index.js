import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';
import './main.scss';

const Wrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

var mountNode = document.getElementById('app');
ReactDOM.render(<Wrapper />, mountNode);