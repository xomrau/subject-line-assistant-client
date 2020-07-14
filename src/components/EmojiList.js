import React from 'react';

function EmojiList(props) {
    if (props.error) {
        return(<div className="view">Error: {props.error.message}</div>);
    } else if (!props.isLoaded) {
        return(<div className="view">Loading Emoji List...!</div>);
    } else {
        return(<div className="view" >
            <ul className="flex row">
                {props.items.map(item => (
                    <li key={item.slug}>{item.character}</li>
                ))}
            </ul>
        </div>);
    }
}

export default EmojiList;