import React from 'react';

function EmojiList(props) {
    if (props.error) {
        return (<div id="error" className="view">Error: {props.error.message}</div>);
    } else if (!props.isLoaded) {
        return (<div id="loading" className="view">Loading Emoji List...!
            <span role="img" aria-label="emoji" > &#x23f3;</span>
            <ul className="flex row">
                <li onClick={props.itemList}>E</li>
                <li onClick={props.itemList}>M</li>
                <li onClick={props.itemList}>O</li>
                <li onClick={props.itemList}>J</li>
                <li onClick={props.itemList}>I</li>
            </ul>
        </div>);
    } else {
        return (<div className="view" >
            <ul className="flex row">
                {props.items.map(item => (
                    <li onClick={props.itemList} key={item.slug}>{item.character}</li>
                ))}
            </ul>
        </div>);
    }
}

export default EmojiList;