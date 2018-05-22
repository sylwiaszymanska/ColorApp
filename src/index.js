import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';
// import './index.scss';

import axios from 'axios';

const store = createStore(rootReducer);


export const colorsRequest = axios.create({
  baseURL: 'http://www.mocky.io/v2/5a37a7403200000f10eb6a2d',
  headers: {
    'Content-Type': 'application/json',
  },
}).get('/').then(response => console.log('data', response.data));


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)