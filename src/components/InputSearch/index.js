import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './styles.scss';

function InputSearch({
  className,
  max,
  min,
  onChange,
  pattern,
  placeholder,
  type,
  value,
}) {
  return (
    <input
      className={cn('input', className)}
      maxLength={max}
      minLength={min}
      onChange={e => onChange(e.target.value)}
      pattern={pattern}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
}

InputSearch.defaultProps = {
  className: '',
  max: null,
  min: null,
  pattern: '',
  placeholder: 'Type here..',
  type: 'search',
  value: '',
};

InputSearch.propTypes = {
  className: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default InputSearch;
