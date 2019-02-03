import React from 'react'
import PropTypes from 'prop-types';

import { SHELF } from './constants';

export default function BookOptions(props) {
  return (
    <div className="book-shelf-changer">
      <select
        value={props.selected ? props.selected : SHELF.NONE}
        onChange={event => props.onUpdateShelf(event.target.value)}>
        <option value="move" disabled>Move to...</option>
        <option value={SHELF.CURRENTLY_READING}>Currently Reading</option>
        <option value={SHELF.WANT_TO_READ}>Want to Read</option>
        <option value={SHELF.READ}>Read</option>
        <option value={SHELF.NONE}>None</option>
      </select>
    </div>
  );
}

BookOptions.propTypes = {
  selected: PropTypes.string,
  onUpdateShelf: PropTypes.func.isRequired,
};