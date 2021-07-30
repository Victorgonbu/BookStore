import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import Filter from '../components/Filter';
import { bookList } from '../style/app.module.css';

function BooksList(props) {
  const {
    books, removeBook, changeFilter, filter, showFilter,
  } = props;

  const getBookIndex = (book, state) => {
    for (let i = 0; i < state.length; i += 1) { if (state[i].id === book.id) return i; }
    return null;
  };

  const handleRemove = (book) => {
    const bookIndex = getBookIndex(book, books);
    removeBook(bookIndex);
  };

  const handleFilterChange = (e) => {
    changeFilter(e.value);
  };

  const filterBooks = (bookList) => {
    if (filter === 'All') return bookList;
    return bookList.filter((book) => book.category === filter);
  };

  return (
    <>
      {showFilter
        && <Filter handleFilter={handleFilterChange} />}
      <ul className={bookList}>

        { filterBooks(books).map((book) => (
          <Book
            handleRemove={handleRemove}
            key={book.id}
            book={book}
          />
        )) }

      </ul>
    </>
  );
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
  showFilter: PropTypes.bool,
};

BooksList.defaultProps = {
  showFilter: false,
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (bookIndex) => { dispatch(removeBook(bookIndex)); },
  changeFilter: (filter) => { dispatch(changeFilter(filter)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
