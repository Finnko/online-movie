import React, {useState} from 'react';
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import Input from '../../components/Input/input.jsx';

const inputNames = {
  email: `Email address`,
  password: `Password`,
};

const SignIn = () => {
  const inputNamesKeys = Object.keys(inputNames);

  const [state, setState] = useState(() => Object.fromEntries(
    inputNamesKeys.map((name) => [name, {
        value: ``,
        error: false,
      }])
  ));

  const isFieldValid = (value) => {
    return true;
  }

  function handleInputChange(evt) {
    const {value, name} = evt.target;

    setState(prevState => ({
      ...prevState,
      [name]: {
        value,
        error: !isFieldValid(value),
      }
    }));
  }

  return (
    <div className="user-page">
      <Header className={`user-page__head`} />

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          <div className="sign-in__fields">
            {inputNamesKeys.map((name) => (
              <Input
                key={name}
                id={`user-${name}`}
                name={`user-${name}`}
                label={inputNames[name]}
                placeholder={inputNames[name]}
                value={state[name].value}
                onInputChange={handleInputChange}
              />
            ))}
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default SignIn;
