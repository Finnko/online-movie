import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Input from '../../components/input/input';
import withAuthData from './with-auth-data';
import {FormField} from '../../interfaces';

const inputNames = {
  email: `Email address`,
  password: `Password`,
};

type MockComponentProps = {
  formControls: {
    email: FormField;
    password: FormField;
  };
  isFormValid: boolean;
  onInputChange: () => void;
}

const MockComponent = (props: MockComponentProps) => {
  const {formControls, isFormValid, onInputChange} = props;

  const renderInputs = () => {
    return Object.keys(formControls).map((name, index) => {
      const {
        value,
        valid,
        touched,
        disabled,
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
          disabled={disabled}
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

const MockComponentWrapped = withAuthData(MockComponent);

describe(`Should hoc withAuthData render correctly`, () => {
  it(`Snapshot render withAuthData`, () => {
    const tree = renderer.create(<MockComponentWrapped />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
