import React from 'react';
import Rating from './rating-component.js';

function Book (props) {
    return <div className="book-style">
      <b>{props.book.title}</b> <br></br><span className="author-color">by {props.book.author}</span>
      <Rating rating={props.book.rating} />
    </div>
  }

export default Book;