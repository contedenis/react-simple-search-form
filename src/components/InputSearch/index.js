// @ packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Icon, Input } from 'semantic-ui-react';

// @ own
import './styles.scss';

function InputSearch({
  className,
  max,
  min,
  name,
  onChange,
  onDelete,
  pattern,
  placeholder,
  type,
  value,
}) {
  return (
    <Input
      className={cn('input', className)}
      icon={<Icon name="delete" link onClick={() => onDelete(name)} />}
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
  name: '',
  pattern: '',
  placeholder: 'Type here..',
  type: 'search',
  value: '',
};

InputSearch.propTypes = {
  className: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default InputSearch;
