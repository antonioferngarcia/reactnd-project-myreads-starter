import React, { Component } from 'react'
import { Switch, Route } from 'react-router'

import './App.css'
import * as BooksAPI from './BooksAPI';
import SearchPage from './SearchPage';
import BooksList from './BooksList';
import NotFound from "./NotFound";

class BooksApp extends Component {
  constructor(props) {
    super(props);
    this.fetchBooks = this.fetchBooks.bind(this);
  }

  componentDidMount() {
    this.fetchBooks()
  }

  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
    booksInShelf: []
  }

  fetchBooks() {
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
      this.setState({ currentlyReading, wantToRead, read, booksInShelf: books });
    });
  }

  render() {
    const { currentlyReading, wantToRead, read, booksInShelf } = this.state;
    return (
      <div className="app">
        <Switch>
          <Route exact path='/' render={() => <BooksList fetchBooks={this.fetchBooks} currentlyReading={currentlyReading} wantToRead={wantToRead} read={read} />}/>
          <Route exact path='/search' render={() => <SearchPage fetchBooks={this.fetchBooks} booksInShelf={booksInShelf} />}/>
          <Route path='*'component={NotFound}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
