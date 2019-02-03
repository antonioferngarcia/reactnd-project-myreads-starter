import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'

class BookOptions extends Component {
  // TODO:  set as stateless component

  render() {
    const { setCurrentlyReadBook, setWantToReadBook, setReadBook, unsetBook } = this.props;

    return (
      <div className="book-shelf-changer">
        <select>
          <option value="move" disabled>Move to...</option>
          <option onClick={setCurrentlyReadBook} value="currentlyReading">Currently Reading</option>
          <option onClick={setWantToReadBook} value="wantToRead">Want to Read</option>
          <option onClick={setReadBook} value="read">Read</option>
          <option onClick={unsetBook} value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookOptions;