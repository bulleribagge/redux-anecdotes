import React from 'react';
import { voteAction } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';
import { useDispatch, useSelector } from 'react-redux';


const AnecdoteList = () => {
    const dispatch = useDispatch();
    const anecdotes = useSelector(({filter, anecdotes}) => {
        return anecdotes.filter(a => filter ? a.content.indexOf(filter) !== -1 : true);
    });

    const vote = (id) => {
        dispatch(voteAction(id));
        const name = anecdotes.find(a => a.id === id).content;
        setNotificationMessage(`you voted '${name}'`);
    }

    const setNotificationMessage = (message) => {
        dispatch(setNotification(message, 5000));
    }

    return (
        <div>
            <h2>Anecdotes</h2>
            {
                anecdotes.map(anecdote => 
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