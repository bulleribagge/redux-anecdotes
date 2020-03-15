
const initialState = "";//"This is a notification";

const reducer = (state = initialState, action) => {
  console.log('state now: ', state);
  console.log('action', action);

  switch (action.type) {
    case 'SETFILTER':
      return action.data.filter
    default:
      return state;
  }
};

export const setFilter = (filter) => {
  return {
    type: 'SETFILTER',
    data: {
      filter: filter
    }
  }
}


export default reducer;
