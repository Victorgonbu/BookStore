import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

function BooksList(props) {
  const { books } = props;

  return (
    <table>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>

      { books.map((book) => (<Book key={book.id} book={book} />)) }

    </table>
  );
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })),
};

BooksList.defaultProps = {
  books: [],
};

const mapStateToProps = (state) => ({ books: state });

export default connect(mapStateToProps)(BooksList);
