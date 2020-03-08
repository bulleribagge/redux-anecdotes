import React from 'react';
import {createNote} from '../reducers/anecdoteReducer';
import {setNotification, clearNotification} from '../reducers/notificationReducer';

const AnecdoteForm = (props) => {

    const create = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        props.store.dispatch(createNote(name));
        event.target.name.value = '';

        setNotificationMessage(`Anecdote created with content: ${name}`);
    }

    const setNotificationMessage = (message) => {
        props.store.dispatch(setNotification(message));
        setTimeout(function(){
            props.store.dispatch(clearNotification());
        }, 5000);
    }

    return (
        <div>
            <h2>Add new</h2>
            <form onSubmit={create}>
                <input type="text" name="name"></input>
                <button type="submit">create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm;