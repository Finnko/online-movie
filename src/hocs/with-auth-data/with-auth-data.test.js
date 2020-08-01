import React from 'react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import Input from '../../components/input/input.tsx';
import withAuthData from './with-auth-data';

const inputNames = {
  email: `Email address`,
  password: `Password`,
};

const MockComponent = ({
  formControls,
  isFormValid,
  onInputChange,
}) => {
  const renderInputs = () => {
    return Object.keys(formControls).map((name, index) => {
      const {
        value,
        valid,
        touched,
        validation
      } = formControls[name];

      return (
        <Input
          key={name + index}
          id={`user-${name}`}
          name={name}
          label={inputNames[name]}
          placeholder={inputNames[name]}
          value={value}
          valid={valid}
          touched={touched}
          shouldValidate={!!validation}
          onInputChange={onInputChange}
        />
      );
    });
  };

  return (
    <div>
      <div className="sign-in__fields">
        {renderInputs()}
      </div>

      <div className="sign-in__submit">
        <button
          className="sign-in__btn"
          type="submit"
          disabled={!isFormValid}
        >
        </button>

      </div>
    </div>
  );
};

MockComponent.propTypes = {
  formControls: PropTypes.object,
  isFormValid: PropTypes.bool,
  onInputChange: PropTypes.func,
};

const MockComponentWrapped = withAuthData(MockComponent);

describe(`Should hoc withAuthData render correctly`, () => {
  it(`Snapshot render withAuthData`, () => {
    const tree = renderer.create(<MockComponentWrapped />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
