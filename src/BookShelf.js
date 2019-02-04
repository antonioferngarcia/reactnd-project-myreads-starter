import React, { Component } from 'react'
import PropTypes from 'prop-types';

import BookCard from './BookCard';

class BooksShelf extends Component {

  static propTypes = {
    shelfTitle: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    updateBooksShelfs: PropTypes.func.isRequired,
  };

  render() {
    const { shelfTitle, books, updateBooksShelfs } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book, key) => <BookCard updateBooksShelfs={updateBooksShelfs} key={`book-card-${key}`} book={book}/>)}
          </ol>
        </div>
      </div>
    )
  }
}

export default BooksShelf;
