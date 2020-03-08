import React from 'react';
import { voteAction } from '../reducers/anecdoteReducer';

const AnecdoteList = (props) => {

    const vote = (id) => {
        props.store.dispatch(voteAction(id));
    }

    return (
        <div>
            <h2>Anecdotes</h2>
            {
                props.store.getState().map(anecdote => 
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default AnecdoteList;