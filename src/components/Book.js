import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';

function Book(props) {
  const { book, handleRemove } = props;

  return (
    <li>
      <div className="book-deails">
        <h1>{book.category}</h1>
        <h2>{book.title}</h2>
      </div>

      <div className="progress">
        <CircularProgress variant="determinate" value={book.progress} />
        <div className="label">{book.progress}</div>
      </div>

      <div>
        <button
          type="button"
          onClick={() => { handleRemove(book); }}
        >
          Remove
        </button>
      </div>
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
