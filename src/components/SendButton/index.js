// @ packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Button } from 'semantic-ui-react';

// @ own
import './styles.scss';

function SendButton({
  children,
  className,
  onClick,
}) {
  return (
    <Button
      className={cn('button', className)}
      color="green"
      onClick={onClick}
      type="button"
    >
      {children}
    </Button>
  );
}

SendButton.defaultProps = {
  className: '',
};

SendButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default SendButton;
