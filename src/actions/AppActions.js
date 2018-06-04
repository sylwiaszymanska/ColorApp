// import { colorsRequest } from './../index';
import dispatchPromiseAction from './dispatchPromiseAction';

import axios from 'axios';

const colorsRequest = axios.create({
  baseURL: 'http://www.mocky.io/v2/5a37a7403200000f10eb6a2d',
  headers: {
    'Content-Type': 'application/json',
  },
}).get('/').then(response => response.data);


// console.log('colorsRequest', colorsRequest());

export const startFetchingColors = () => dispatch =>
  dispatchPromiseAction(
    dispatch,
    {
        type: 'COLORS_FETCHING_STARTED',
    },
    'COLORS_FETCHING_SUCCEEDED',
    'COLORS_FETCHING_FAILED',
    colorsRequest
);
