import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import BooksShelf from './BookShelf';

class BooksList extends Component {

  static propTypes = {
    currentlyReading: PropTypes.array.isRequired,
    wantToRead: PropTypes.array.isRequired,
    read: PropTypes.array.isRequired,
    fetchBooks: PropTypes.func.isRequired
  };

  render() {
    const { currentlyReading, wantToRead, read, fetchBooks } = this.props;

    return (
      <div className="app">
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BooksShelf updateBooksShelfs={fetchBooks} books={currentlyReading} shelfTitle='Currently Reading'/>
                <BooksShelf updateBooksShelfs={fetchBooks} books={wantToRead} shelfTitle='Want to Read' />
                <BooksShelf updateBooksShelfs={fetchBooks} books={read} shelfTitle='Read' />
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>
                <button/>
              </Link>
            </div>
          </div>
      </div>
    )
  }
}

export default BooksList;
