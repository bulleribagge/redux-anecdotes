import React, { useEffect } from 'react';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';
import Filter from './components/Filter';
import { initAnecdotes } from './reducers/anecdoteReducer';
import anecdoteService from './services/anecdotes';
import { useDispatch, Provider } from 'react-redux';

const AppWrapper = (props) => {
  return (
    <Provider store={props.store}>
      <App />
    </Provider>
  )
}

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    anecdoteService
      .getAll().then(anecdotes => dispatch(initAnecdotes(anecdotes)))
  }, [dispatch]);

  return (
    <div>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default AppWrapper