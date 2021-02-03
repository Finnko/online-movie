import * as React from 'react';

type InputProps = {
  id: string;
  label: string;
  placeholder: string;
  name: string;
  value: string;
  valid: boolean;
  touched: boolean;
  shouldValidate: boolean;
  disabled: boolean;
  onInputChange: ({}) => void;
}

function isFieldInvalid(valid, touched, shouldValidate) {
  return !valid && shouldValidate && touched;
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  const {
    id,
    label,
    placeholder,
    name,
    value,
    valid,
    touched,
    shouldValidate,
    disabled,
    onInputChange,
  } = props;

  const isInvalid = isFieldInvalid(valid, touched, shouldValidate);

  return (
    <div className={`sign-in__field ${isInvalid ? `sign-in__field--error` : ``}`}>
      <input
        type={name}
        id={id}
        value={value}
        name={name}
        placeholder={placeholder}
        className="sign-in__input"
        disabled={disabled}
        onChange={(evt) => onInputChange(evt)}
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

export default Input;
