import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as _ from 'lodash'

import * as BooksAPI from './BooksAPI'
import BookCard from './BookCard';

class SearchPage extends Component {

  constructor(props) {
    super(props);
    this.manageSearchInput = this.manageSearchInput.bind(this);
  }

  state = {
    searchKeywords: '',
    books: []
  }

  manageSearchInput(event) {
    this.setState( { searchKeywords: event.target.value });
    this.searchBooks(event.target.value)
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
                {books.map((book, key) => <BookCard key={`book-card-${key}`} book={book}/>)}
              </ol>
            </div>
          </div>
      </div>
    )
  }
}

export default SearchPage;
