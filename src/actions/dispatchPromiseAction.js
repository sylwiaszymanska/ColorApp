const dispatchPromiseAction = (dispatch, action, resolveActionType, rejectActionType, promise) => {
    // console.log('dispatchPromiseAction', action);
    dispatch(action);
    return promise.then(
        (result) => {
            dispatch({
                type: resolveActionType,
                result
            });
            console.log('result', result);
            return result;
        },
        (reason) => {
            dispatch({
                type: rejectActionType,
                reason
            });
            throw reason;
        },
    );
};

export default dispatchPromiseAction;
