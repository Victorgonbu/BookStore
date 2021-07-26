import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const { book, handleRemove } = props;
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>
        <button
          type="button"
          onClick={() => { handleRemove(book); }}
        >
          Remove
        </button>
      </td>
    </tr>
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
