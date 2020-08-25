// Search Components
import React from 'react';

function Search(props) {
    return (<div className="form view pt-20">
        <form className="flex row">
            <input type="text" id="search" value={props.input} onChange={props.filterChange} placeholder="Search emoji's name..." />
        </form>
    </div>);
}

export default Search;