import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const Filter = (props) => {
  console.log(props);
  const { handleFilter } = props;
  const CATEGORIES = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const getOptions = () => CATEGORIES.map((category) => ({ value: category, label: category }));
  const selectOptions = getOptions();
  return (
    <>
      <h1>Categories filter</h1>
      <Select
        className="category"
        classNamePrefix="select"
        defaultValue={selectOptions[0]}
        name="category"
        options={selectOptions}
        onChange={handleFilter}
      />
    </>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;
