import React from 'react';

function Genre(props) {
    return <button onClick={() => props.getCurrentGenre(props.genre)}>{props.genre}</button>
};



export default Genre;