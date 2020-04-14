import React from 'react';
import { setFilter } from '../reducers/filterReducer';
import { useDispatch } from 'react-redux';

const Filter = (props) => {
    const dispatch = useDispatch();

    const filterChanged = (e) => {
        const filter = e.target.value
        dispatch(setFilter(filter));
    }

    return (
        <div>
            Filter
            <input type="text" onChange={(e) => filterChanged(e)}></input>
        </div>
    )
}

export default Filter;