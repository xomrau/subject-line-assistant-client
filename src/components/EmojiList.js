import React from 'react';

function EmojiList(props) {
    let arrayList = '';
    if (props.activePage === 1) {
        arrayList = props.items.slice(0, props.activePage * props.itemPerPage);
    } else {
        arrayList = props.items.slice(props.itemPerPage * (props.activePage - 1), props.activePage * props.itemPerPage);
    }
    if (props.error) {
        return (<div id="error" className="view">Error: {props.error.message}</div>);
    } else if (!props.isLoaded) {
        return (<div id="loading" className="view">Loading Emoji List...!
            <span role="img" aria-label="emoji"  > &#x23f3;</span>
        </div>);
    } else {
        return (<div className="view" >
            <ul className="flex row">
                {arrayList.map(item => (
                    <li onClick={props.itemList} key={item.slug}>{item.character}</li>
                ))}
            </ul>
        </div>);
    }
}

export default EmojiList;