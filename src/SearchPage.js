import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import * as _ from 'lodash'

import * as BooksAPI from './BooksAPI'
import BookCard from './BookCard';

class SearchPage extends Component {

  constructor(props) {
    super(props);
    this.manageSearchInput = this.manageSearchInput.bind(this);
  }

  static propTypes = {
    booksInShelf: PropTypes.array.isRequired
  };

  static defaultProps = {
    booksInShelf: []
  };

  state = {
    searchKeywords: '',
    books: []
  }

  manageSearchInput(event) {
    this.setState( { searchKeywords: event.target.value });
    this.searchBooks(event.target.value);
  }

  searchBooks = _.throttle((value) => {
    if(value !== '') {
      BooksAPI.search(value)
        .then((result) => {
          this.setState ({ books: result.error ? [] : result });
        })
    } else {
      this.setState ({ books: [] });
    }
  }, 500, { trailing: true });

  render() {
    const { searchKeywords, books } = this.state;
    const { booksInShelf, fetchBooks } = this.props;

    books.map(book => {
      const bookFound = booksInShelf.filter(bookInShelf => bookInShelf.id === book.id);
      book.shelf = bookFound[0] ? bookFound[0].shelf : book.shelf;
      return book;
    });

    return (
      <div className="app">
          <div className="search-books">
            <div className="search-books-bar">
              <Link to='/'>
                <button className="close-search"/>
              </Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" value={searchKeywords} onChange={this.manageSearchInput} placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {books.map((book, key) => <BookCard updateBooksShelfs={fetchBooks} key={`book-card-${key}`} book={book}/>)}
              </ol>
            </div>
          </div>
      </div>
    )
  }
}

export default SearchPage;
