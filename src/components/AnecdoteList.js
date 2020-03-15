import React from 'react';
import { voteAction } from '../reducers/anecdoteReducer';
import { setNotification, clearNotification } from '../reducers/notificationReducer';

const AnecdoteList = (props) => {

    const anecdotes = () => {
        const filter = props.store.getState().filter;
        const anecdotes = props.store.getState().anecdotes;
        console.log(`hallao eller`, anecdotes);
        return anecdotes.filter(a => filter ? a.content.indexOf(filter) !== -1 : true);
    }

    const vote = (id) => {
        props.store.dispatch(voteAction(id));
        const name = props.store.getState().anecdotes.find(a => a.id === id).content;
        setNotificationMessage(`you voted '${name}'`);
    }

    const setNotificationMessage = (message) => {
        props.store.dispatch(setNotification(message));
        setTimeout(function(){
            props.store.dispatch(clearNotification());
        }, 5000);
    }

    return (
        <div>
            <h2>Anecdotes</h2>
            {
                anecdotes().map(anecdote => 
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