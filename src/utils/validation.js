import {EMAIL_PATTERN} from '../const';

const validateControl = (value, validation) => {
  if (!validation) {
    return true;
  }

  let isValid = true;

  if (validation.required) {
    isValid = value.trim() !== `` && isValid;
  }

  if (validation.email) {
    isValid = EMAIL_PATTERN.test(value) && isValid;
  }

  if (validation.minLength) {
    isValid = value.length >= validation.minLength && isValid;
  }

  return isValid;
};

export {validateControl};
