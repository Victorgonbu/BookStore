import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';
import {
  progress, label, bookDetails, bookItem, flex, buttons,
  bookItemSection, progressDetails, button,
} from '../style/app.module.css';

function Book(props) {
  const { book, handleRemove } = props;

  return (
    <li className={`${flex} ${bookItem}`}>
      <div className={`${bookItemSection} ${bookDetails}`}>
        <h1>{book.category}</h1>
        <h2>{book.title}</h2>
        <div className={`${flex} ${buttons}`}>
          <button className={button} type="button">Comments</button>
          <button
            type="button"
            className={button}
            onClick={() => { handleRemove(book); }}
          >
            Remove
          </button>
          <button className={button} type="button">Edit</button>
        </div>

      </div>

      <div className={`${bookItemSection} ${progress}`}>
        <CircularProgress variant="determinate" value={book.progress} />
        <div className={label}>{book.progress}</div>
      </div>

      <div className={`${bookItemSection} ${progressDetails}`}>
        <h3>Current progress</h3>
        <p>random chapter</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>

      <div />
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Book;
