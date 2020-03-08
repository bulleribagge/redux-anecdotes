import React from 'react';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';

const App = (props) => {

  return (
    <div>
      <AnecdoteList store={props.store}></AnecdoteList>
      <AnecdoteForm store={props.store}></AnecdoteForm>
    </div>
  )
}

export default App