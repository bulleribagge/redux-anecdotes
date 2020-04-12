import React from 'react';
import { voteAction } from '../reducers/anecdoteReducer';
import { setNotification, clearNotification } from '../reducers/notificationReducer';
import { connect } from 'react-redux';

const AnecdoteList = (props) => {

    const anecdotesFiltered = () => {
        return props.anecdotes.filter(a => props.filter ? a.content.indexOf(props.filter) !== -1 : true);
    }

    const vote = (id) => {
        props.voteAction(id);
        const name = props.anecdotes.find(a => a.id === id).content;
        setNotificationMessage(`you voted '${name}'`);
    }

    const setNotificationMessage = (message) => {
        props.setNotification(message);
        setTimeout(function(){
            props.clearNotification();
        }, 5000);
    }

    return (
        <div>
            <h2>Anecdotes</h2>
            {
                anecdotesFiltered().map(anecdote => 
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

const mapStateToProps = state => {
    return {
        filter: state.filter,
        anecdotes: state.anecdotes
    };
}

export default connect(mapStateToProps, { voteAction, setNotification, clearNotification })(AnecdoteList);