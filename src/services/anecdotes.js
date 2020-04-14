import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
}

const createNew = async (content) => {
    const anecdote = { content: content, votes: 0 };
    const response = await axios.post(baseUrl, anecdote);
    return response.data;
}

const getAnecdote = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
}

const vote = async (id) => {
    var anecdote = await getAnecdote(id)
    await axios.patch(`${baseUrl}/${id}`, { votes: anecdote.votes + 1 });
}

export default {
    getAll,
    createNew,
    vote
}