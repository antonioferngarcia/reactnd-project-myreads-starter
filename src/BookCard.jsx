import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import BookOptions from './BookOptions';

class BookCard extends Component {

  render() {
    const { book } = this.props;

    console.log(book);
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
            <BookOptions />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors.join(', ')}</div>
        </div>
      </li>
    )
  }
}

export default BookCard;
