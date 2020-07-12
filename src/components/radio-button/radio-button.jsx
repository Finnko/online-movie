import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const RadioButton = ({
  checked,
  label,
  id,
  groupName,
  value,
  onRadioChange
}) => {
  return (
    <Fragment>
      <input
        type="radio"
        name={groupName}
        id={id}
        className="rating__input"
        value={value}
        checked={checked}
        onChange={onRadioChange}
      />

      <label className="rating__label" htmlFor={id}>
        {label}
      </label>
    </Fragment>
  );
};

RadioButton.propTypes = {
  checked: PropTypes.bool.isRequired,
  groupName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onRadioChange: PropTypes.func.isRequired,
};

export default RadioButton;
