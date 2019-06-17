import React from 'react';
import PropTypes from 'prop-types';

function Title({ children }) {
  return (
    <h3 className="title">{children}</h3>
  );
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
