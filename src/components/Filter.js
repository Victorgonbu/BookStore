import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { categoriesFilter, categoriesFilterTitle } from '../style/app.module.css';

const Filter = (props) => {
  const { handleFilter } = props;
  const CATEGORIES = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const getOptions = () => CATEGORIES.map((category) => ({ value: category, label: category }));
  const selectOptions = getOptions();
  return (
    <div className={categoriesFilter}>
      <h1 className={categoriesFilterTitle}>CATEGORIES FILTER</h1>
      <Select
        className="category"
        classNamePrefix="select"
        defaultValue={selectOptions[0]}
        name="category"
        options={selectOptions}
        onChange={handleFilter}
      />
    </div>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;
