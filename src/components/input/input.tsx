import * as React from 'react';

type InputProps = {
  id: string,
  label: string,
  placeholder: string,
  name: string,
  value: string,
  valid: boolean,
  touched: boolean,
  shouldValidate: boolean,
  onInputChange: () => void,
}

function isFieldInvalid(valid, touched, shouldValidate) {
  return !valid && shouldValidate && touched;
}

const Input:React.FC<InputProps> = ({
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

export default Input;
