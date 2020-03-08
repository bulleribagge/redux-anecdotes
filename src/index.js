import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import App from './App';
import anecdotesReducer from './reducers/anecdoteReducer';
import notificationReducer from './reducers/notificationReducer';

const store = createStore(
  combineReducers({anecdotes: anecdotesReducer, notification: notificationReducer}),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const render = () => {
  ReactDOM.render(<App store={store} />, document.getElementById('root'));
};

render();
store.subscribe(render);
