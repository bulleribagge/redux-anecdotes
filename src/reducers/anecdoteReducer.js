import anecdoteService from '../services/anecdotes';

const reducer = (state = [], action) => {
  console.log('state now: ', state);
  console.log('action', action);

  switch (action.type) {
    case 'VOTE':
      const anecdoteToChange = state.find(x => x.id === action.data.id);
      const changedAnecdote = {...anecdoteToChange, votes: anecdoteToChange.votes + 1};
      return state.map(x => x.id !== action.data.id ? x : changedAnecdote).sort((a,b) => b.votes - a.votes);
    case 'CREATE':
      return state.concat(action.data);
    case 'INIT_ANECDOTES':
      return action.data;
    default:
      return state;
  }
};

export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch( {
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const voteAction = (id) => {
  return async dispatch => {
    await anecdoteService.vote(id);
    dispatch({
      type: 'VOTE',
      data: {
        id: id
      }
    })
  }
}

export const createNote = (data) => {
  return async dispatch => {
    const anecdote = await anecdoteService.createNew(data);
    dispatch({
      type: 'CREATE',
      data: anecdote
    })
  }
}

export default reducer;
