import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import BooksShelf from './BookShelf';

class BooksList extends Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      const currentlyReading = [];
      const wantToRead = [];
      const read = [];
      books.forEach(book => {
        switch (book.shelf) {
          case 'currentlyReading':
            currentlyReading.push(book);
            break;
          case 'wantToRead':
            wantToRead.push(book);
            break;
          case 'read':
            read.push(book);
            break;
          default:
            console.error(`Unknown book shelf: ${book.shelf}`)
            break;
        }
      });
      this.setState({ currentlyReading, wantToRead, read });
    })
  }

  render() {
    const { currentlyReading, wantToRead, read } = this.state;

    return (
      <div className="app">
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BooksShelf books={currentlyReading} shelfTitle='Currently Reading'/>
                <BooksShelf books={wantToRead} shelfTitle='Want to Read' />
                <BooksShelf books={read} shelfTitle='Read' />
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>
                <button onClick={() => console.log('show search pls')}>Add a book</button>
              </Link>
            </div>
          </div>
      </div>
    )
  }
}

export default BooksList;
