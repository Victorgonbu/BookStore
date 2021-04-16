import React from 'react';

function BooksForm() {
  const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const opt = (CATEGORIES) => CATEGORIES.map((ct) => (<option key={ct} value={ct}>{ct}</option>));
  return (
    <form>
      <div className="title">
        <label htmlFor="title">
          Title
          <input name="title" id="title" type="text" />
        </label>

      </div>
      <div className="category">
        <label htmlFor="category">
          Category
          <select name="category" id="category">
            {opt(CATEGORIES)}
          </select>
        </label>

      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}

export default BooksForm;
