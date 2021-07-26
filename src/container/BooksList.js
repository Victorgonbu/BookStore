import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

function BooksList(props) {
  const { books, removeBook } = props;

  const getBookIndex = (book, state) => {
    for (let i = 0; i < state.length; i += 1) { if (state[i].id === book.id) return i; }
    return null;
  };

  const handleRemove = (book) => {
    const bookIndex = getBookIndex(book, books);
    removeBook(bookIndex);
  };

  return (
    <table>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>

      { books.map((book) => (<Book handleRemove={handleRemove} key={book.id} book={book} />)) }

    </table>
  );
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ books: state.books });

const mapDispatchToProps = (dispatch) => ({
  removeBook: (bookIndex) => { dispatch(removeBook(bookIndex)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
