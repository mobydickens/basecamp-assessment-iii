import React from 'react';
import Rating from './rating-component.js';

function Book (props) {
    return <div className="book-style">
      <b>{props.book.title}</b> by {props.book.author}
      <Rating rating={props.book.rating} />
    </div>
  }

export default Book;