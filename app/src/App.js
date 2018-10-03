import React, { Component } from 'react';
import './App.css';
import books from './books.js';
import Book from './book-component.jsx';
import Genre from './genre-component.js';

class App extends Component {
  state = {
    filteredBooks: books
  };

  //This function returns an array of genres in the books array, with no duplicates
  getGenres = () => {
    let genreArray = [];
    for(let i = 0; i<books.length; i++) {
      let currentBook = books[i];
      if(genreArray.indexOf(currentBook.genre) === -1) {
        genreArray.push(currentBook.genre);
      }
    }
    return genreArray;
  };
  //this function resets my state to default so entire book list is showing
  resetGenre = () => {
    this.setState({
      filteredBooks: books
    })
};

  //this function is my Change State function
  getCurrentGenre = (genre) => {
      this.setState({
        filteredBooks: books.filter(book => book.genre === genre)
      })
  };

  render() {
    let genres = this.getGenres();
    return (
      
      <div>
        <h1>The (extremely condensed) To Read Library</h1>
        <button onClick={this.resetGenre}>All Genres</button>
        <div>{genres.map(genre => <Genre genre={genre} getCurrentGenre={this.getCurrentGenre} key={genre} />)}</div>
        <div>{this.state.filteredBooks.map(book => <Book book={book} key={book.title} />)}</div>
      </div>
    );
  }
}


















export default App;


//create buttons for genres 2 genre button
//create star icons for books 1 print rating

// create for loop to pick a book


