// import { COLORS_FETCHING_SUCCEEDED } from '../../shared-js/actionTypes';/

const initialState = null;

const colorsReducer = (state = initialState, action) => {
  if (action.type === 'COLORS_FETCHING_SUCCEEDED') {
    return action.result;
  } else {
    return state;
  }
};

export default colorsReducer;
