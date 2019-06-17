import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import './styles.scss';

function Title({ children, className }) {
  return (
    <h3 className={cn('title', className)}>{children}</h3>
  );
}

Title.defaultProps = {
  className: '',
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Title;
