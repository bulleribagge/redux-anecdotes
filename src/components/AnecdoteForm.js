import React from 'react';
import {createNote} from '../reducers/anecdoteReducer';

const AnecdoteForm = (props) => {

    const create = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        props.store.dispatch(createNote(name));
        event.target.name.value = '';
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