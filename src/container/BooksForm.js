import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Select, MenuItem, InputLabel, FormControl, TextField,
} from '@material-ui/core';
import { createBook } from '../actions/index';
import {
  bookForm, bookFormWrapper, addBookTitle, categoriesSelect,
  titleInput, addBookButton,
} from '../style/app.module.css';

function BooksForm(props) {
  const { createBook } = props;
  const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const generateProgress = () => Math.floor(Math.random() * 100);
  const [bookFields, setBookFields] = useState({ title: '', category: '', progress: generateProgress() });

  const opt = (CATEGORIES) => CATEGORIES.map((ct) => (
    <MenuItem
      key={ct}
      value={ct}
    >
      {ct}
    </MenuItem>
  ));

  const handleChange = (e) => {
    setBookFields((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(bookFields);
    setBookFields({ title: '', category: 'Category', progress: generateProgress() });
  };

  return (
    <div className={bookFormWrapper}>
      <h3 className={addBookTitle}>ADD NEW BOOK</h3>
      <form className={bookForm}>
        <TextField
          value={bookFields.title}
          onChange={handleChange}
          name="title"
          id="standard-basic"
          label="Title"
          className={titleInput}
        />
        <FormControl className={categoriesSelect}>
          <InputLabel id="category" htmlFor="category">Category</InputLabel>
          <Select labelId="category" value={bookFields.category} onChange={handleChange} name="category" id="category">
            {opt(CATEGORIES)}
          </Select>
        </FormControl>

        <input className={addBookButton} onClick={handleSubmit} type="submit" value="ADD BOOK" />

      </form>
    </div>

  );
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => { dispatch(createBook(book)); },
});

export default connect(null, mapDispatchToProps)(BooksForm);
