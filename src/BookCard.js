import React, { Component } from 'react'
import PropTypes from 'prop-types';

import * as BooksAPI from './BooksAPI'
import BookOptions from './BookOptions';

class BookCard extends Component {

  constructor(props) {
    super(props);
    this.updateBookShelf = this.updateBookShelf.bind(this);
  }

  static propTypes = {
    book: PropTypes.object.isRequired,
    updateBooksShelfs: PropTypes.func,
  };

  updateBookShelf(shelf) {
    const { book, updateBooksShelfs } = this.props;
    BooksAPI.update(book, shelf)
      .then(() => {
        if(updateBooksShelfs) updateBooksShelfs();
      });
  }

  render() {
    const { book } = this.props;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : 'https://dummyimage.com/128x193/2e7c31/fff.png&text=Cover+Missing'})` }}></div>
            <BookOptions selected={book.shelf} onUpdateShelf={this.updateBookShelf}/>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
        </div>
      </li>
    )
  }
}

export default BookCard;
