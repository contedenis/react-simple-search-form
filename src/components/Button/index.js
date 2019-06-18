import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './styles.scss';

function Button({
  children,
  className,
  // onClick,
}) {
  return (
    <button
      className={cn('button', className)}
      // onClick={onClick}
      type="submit"
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  // onClick: PropTypes.func.isRequired,
};

export default Button;
