
const initialState = "";//"This is a notification";
var currentTimeoutId;

const reducer = (state = initialState, action) => {
  console.log('state now: ', state);
  console.log('action', action);

  switch (action.type) {
    case 'SET':
      return action.data.message
    case 'CLEAR':
      return '';
    default:
      return state;
  }
};

export const setNotification = (message, timeout) => {
  return async dispatch => {
    dispatch({
      type: 'SET',
      data: {
        message: message
      }
    });
    clearTimeout(currentTimeoutId);
    currentTimeoutId = setTimeout(function() {
      dispatch(clearNotification())
      currentTimeoutId = undefined;
    }, 
    timeout);
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR'
  }
}

export default reducer;
