import React from 'react';
import {createNote} from '../reducers/anecdoteReducer';
import {setNotification, clearNotification} from '../reducers/notificationReducer';
import anecdoteService from '../services/anecdotes';
import {connect} from 'react-redux';

const AnecdoteForm = (props) => {

    const create = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const anecdote = anecdoteService.createNew(name);
        props.createNote(anecdote);
        event.target.name.value = '';

        setNotificationMessage(`Anecdote created with content: ${name}`);
    }

    const setNotificationMessage = (message) => {
        props.setNotification(message)
        setTimeout(function(){
            props.clearNotification()
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

export default connect(null, {createNote, setNotification, clearNotification})(AnecdoteForm);