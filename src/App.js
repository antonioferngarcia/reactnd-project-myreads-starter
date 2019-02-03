import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage';
import BooksList from './BooksList';
import { Switch, Route } from 'react-router'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/' component={BooksList}/>
          <Route exact path='/search' component={SearchPage}/>
        </Switch>
        {/* {this.state.showSearchPage ? <SearchPage /> : <BooksList />} */}
      </div>
    )
  }
}

export default BooksApp
