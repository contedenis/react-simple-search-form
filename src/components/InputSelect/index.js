// @ packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Dropdown } from 'semantic-ui-react';

// @ own
import './styles.scss';

function InputSelect({
  className,
  onChange,
  options,
  placeholder,
  value,
}) {
  return (
    <Dropdown
      className={cn('input-select', className)}
      clearable
      onChange={onChange}
      options={options}
      placeholder={placeholder}
      value={value || ''}
    />
  );
}

InputSelect.defaultProps = {
  className: '',
  placeholder: 'Select an option',
  value: '',
};

InputSelect.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default InputSelect;
