import { colorsRequest } from './../index';

const dispatchPromiseAction = (dispatch, action, resolveActionType, rejectActionType, promise) => {
  dispatch(action);

  return promise.then(
    (result) => {
      dispatch({ type: resolveActionType, result });
      return result;
    },
    (reason) => {
      dispatch({ type: rejectActionType, reason });
      throw reason;
    },
  );
};

export default dispatchPromiseAction;

export const startFetchingColors = () => dispatch => dispatchPromiseAction(
  dispatch,
  {
    type: COLORS_FETCHING_STARTED,
  },
  COLORS_FETCHING_SUCCEEDED,
  COLORS_FETCHING_FAILED,
  colorsRequest(),
);