import React from 'react';
import { setFilter } from '../reducers/filterReducer';

const Filter = (props) => {

    const filterChanged = (e) => {
        const filter = e.target.value
        props.store.dispatch(setFilter(filter));
    }

    return (
        <div>
            Filter
            <input type="text" onChange={(e) => filterChanged(e)}></input>
        </div>
    )
}

export default Filter;