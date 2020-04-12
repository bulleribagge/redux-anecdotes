import React from 'react';
import { setFilter } from '../reducers/filterReducer';
import { connect } from 'react-redux';

const Filter = (props) => {

    const filterChanged = (e) => {
        const filter = e.target.value
        props.setFilter(filter);
    }

    return (
        <div>
            Filter
            <input type="text" onChange={(e) => filterChanged(e)}></input>
        </div>
    )
}

export default connect(null, { setFilter })(Filter);