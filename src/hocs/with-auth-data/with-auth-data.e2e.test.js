import React from 'react';
import PropTypes from 'prop-types';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from '../../components/input/input';
import withAuthData from './with-auth-data';

Enzyme.configure({
  adapter: new Adapter(),
});

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

describe(`Test e2e hoc withReviewData`, () => {
  const emailEvent = {
    target: {
      value: `aaaabc@a.ru`,
      name: `email`,
    },
  };
  const passwordEvent = {
    target: {
      value: `123456`,
      name: `password`,
    },
  };

  it(`Should allow to send valid form`, () => {
    const wrapper = mount(
        <MockComponentWrapped />
    );

    const instance = wrapper.instance();

    const email = wrapper.find(`input`).first();
    const password = wrapper.find(`input`).at(1);

    expect(wrapper.state().formControls.email.value).toBe(``);
    expect(wrapper.state().formControls.password.value).toBe(``);
    expect(wrapper.state().isFormValid).toBe(false);

    email.simulate(`change`, emailEvent);
    password.simulate(`change`, passwordEvent);
    instance.setState({isFormValid: true});

    expect(wrapper.state().formControls.email.value).toBe(`aaaabc@a.ru`);
    expect(wrapper.state().formControls.password.value).toBe(`123456`);
    expect(wrapper.state().isFormValid).toBe(true);
  });

  it(`Should _handleInputChange works`, () => {
    const wrapper = mount(
        <MockComponentWrapped />
    );

    const instance = wrapper.instance();
    instance._handleInputChange = jest.fn();
    instance._handleInputChange({target: {value: `abc`}});

    expect(instance._handleInputChange).toHaveBeenCalledTimes(1);
  });
});
