import React from 'react';
import PropTypes from 'prop-types';

const PageButtons = ({ handleChange }) => {
  return (
    <>
      <button onClick={handleChange} value={-1}>Prev</button>
      <button onClick={handleChange} value={1}>Next</button>
    </>
  );
};

PageButtons.propTypes = {
  handleChange: PropTypes.func
};

export default PageButtons;
