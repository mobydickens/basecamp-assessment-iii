import React from 'react';

function Rating (props) {
    let stars = [];
    for(let i = 1; i<=5; i++) {
        if (i<=props.rating) {
            stars.push('⭐');
        } else {
            stars.push('☆');
        }
    }
    return <div>{stars}</div>
}


export default Rating;