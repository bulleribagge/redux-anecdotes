import React from 'react';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';
import Filter from './components/Filter';

const App = (props) => {

  return (
    <div>
      <Notification store={props.store}></Notification>
      <Filter store={props.store}></Filter>
      <AnecdoteList store={props.store}></AnecdoteList>
      <AnecdoteForm store={props.store}></AnecdoteForm>
    </div>
  )
}

export default App