import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import AppContainer from './components/AppContainer';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

import axios from 'axios';




export const colorsRequest = axios.create({
  baseURL: 'http://www.mocky.io/v2/5a37a7403200000f10eb6a2d',
  headers: {
    'Content-Type': 'application/json',
  },
}).get('/').then(console.log('STH STH STH')).then(response => response.data);


const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk),
  ),
);

console.log("STORE", store);

ReactDOM.render(
  (
  <Provider store={store}>
    <AppContainer />
  </Provider>
),
  document.getElementById('root')
);
