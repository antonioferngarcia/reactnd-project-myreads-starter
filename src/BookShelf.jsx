import React, { Component } from 'react'
import BookCard from './BookCard';

class BooksShelf extends Component {

  render() {
    const { shelfTitle, books } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book, key) => <BookCard key={`book-card-${key}`} book={book}/>)}
          </ol>
        </div>
      </div>
    )
  }
}

export default BooksShelf;
