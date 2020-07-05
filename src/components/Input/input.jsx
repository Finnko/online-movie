import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  id,
  label,
  placeholder,
  name,
  value,
  onInputChange,
}) => {


  return (
    <div className="sign-in__field">
      <input
        type={name}
        id={id}
        value={value}
        name={name}
        placeholder={placeholder}
        className="sign-in__input"
        onChange={onInputChange}
      />

      <label
        className="sign-in__label visually-hidden"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Input;
