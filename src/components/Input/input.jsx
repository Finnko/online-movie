import React from 'react';
import PropTypes from 'prop-types';


function isFieldInvalid(valid, touched, shouldValidate) {
  return !valid && shouldValidate && touched;
}

const Input = ({
  id,
  label,
  placeholder,
  name,
  value,
  valid,
  touched,
  shouldValidate,
  onInputChange,
}) => {
  let isInvalid = isFieldInvalid(valid, touched, shouldValidate);

  return (
    <div className={`sign-in__field ${isInvalid ? `sign-in__field--error` : ``}`}>
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
  valid: PropTypes.bool.isRequired,
  touched: PropTypes.bool.isRequired,
  shouldValidate: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Input;
