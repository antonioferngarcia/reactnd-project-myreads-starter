import React, { Component } from 'react'
import { Switch, Route } from 'react-router'

import './App.css'
import SearchPage from './SearchPage';
import BooksList from './BooksList';

class BooksApp extends Component {

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/' component={BooksList}/>
          <Route exact path='/search' component={SearchPage}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
