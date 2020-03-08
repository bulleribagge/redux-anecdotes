
const initialState = "";//"This is a notification";

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

export const setNotification = (message) => {
  return {
    type: 'SET',
    data: {
      message: message
    }
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR'
  }
}

export default reducer;
