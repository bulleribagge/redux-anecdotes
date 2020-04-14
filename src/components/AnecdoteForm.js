import React from 'react';
import { createNote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';
import { useDispatch } from 'react-redux';

const AnecdoteForm = () => {

    const dispatch = useDispatch();

    const create = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        dispatch(createNote(name));
        event.target.name.value = '';

        setNotificationMessage(`Anecdote created with content: ${name}`);
    }

    const setNotificationMessage = (message) => {
        dispatch(setNotification(message, 5000));
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