// @ packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { noop } from 'lodash';
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
  onChange: noop,
  onDelete: noop,
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
  onChange: PropTypes.func,
  onDelete: PropTypes.func,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default InputSearch;
