import * as React from 'react';

type Props = {
  checked: boolean,
  disabled: boolean,
  groupName: string,
  label: string,
  id: string,
  value: string,
  onRadioChange: () => void,
}

const RadioButton:React.FC<Props> = ({
  checked,
  label,
  id,
  groupName,
  value,
  disabled,
  onRadioChange
}) => {
  return (
    <React.Fragment>
      <input
        type="radio"
        name={groupName}
        id={id}
        className="rating__input"
        value={value}
        checked={checked}
        onChange={onRadioChange}
        disabled={disabled}
      />

      <label className="rating__label" htmlFor={id}>
        {label}
      </label>
    </React.Fragment>
  );
};

export default RadioButton;
