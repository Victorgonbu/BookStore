import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

function BooksForm(props) {
  const { createBook } = props;
  const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const [bookFields, setBookFields] = useState({ title: '', category: '' });

  const opt = (CATEGORIES) => CATEGORIES.map((ct) => (<option key={ct} value={ct}>{ct}</option>));

  const handleChange = (e) => {
    setBookFields((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(bookFields);
    setBookFields({ title: '', category: '' });
  };

  return (
    <form>
      <div className="title">
        <label htmlFor="title">
          Title
          <input value={bookFields.title} onChange={handleChange} name="title" id="title" type="text" />
        </label>

      </div>
      <div className="category">
        <label htmlFor="category">
          Category
          <select value={bookFields.category} onChange={handleChange} name="category" id="category">
            {opt(CATEGORIES)}
          </select>
        </label>

      </div>
      <div>
        <input onClick={handleSubmit} type="submit" value="Submit" />
      </div>
    </form>
  );
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => { dispatch(createBook(book)); },
});

export default connect(null, mapDispatchToProps)(BooksForm);
