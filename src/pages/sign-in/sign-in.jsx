import React, {Component} from 'react';
import {validateControl} from '../../utils/validation';
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import Input from '../../components/Input/input.jsx';
import Loader from '../../components/loader/loader.jsx';

const inputNames = {
  email: `Email address`,
  password: `Password`,
};

const inputs = Object.keys(inputNames);

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFormValid: false,
      formControls: {
        email: {
          value: ``,
          valid: false,
          touched: false,
          validation: {
            required: true,
            email: true
          }
        },
        password: {
          value: ``,
          valid: false,
          touched: false,
          validation: {
            required: true,
            minLength: 6
          }
        }
      }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(evt) {
    const {value, name} = evt.target;
    let isFormValid = true;
    const formControls = Object.assign({}, this.state.formControls);
    const control = Object.assign({}, this.state.formControls[name]);

    control.value = value;
    control.touched = true;
    control.valid = validateControl(control.value, control.validation);

    formControls[name] = control;

    Object.keys(formControls).forEach((controlName) => {
      isFormValid = formControls[controlName].valid && isFormValid;
    });

    this.setState({
      formControls,
      isFormValid,
    });
  }

  renderInputs() {
    return inputs.map((name, index) => {
      const {value, valid, touched, validation} = this.state.formControls[name];

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
          onInputChange={this.handleInputChange}
        />
      );
    });
  }

  render() {
    return (
      <div className="user-page">
        <Header className={`user-page__head`}/>

        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form">
            <div className="sign-in__fields">
              {this.renderInputs()}
            </div>
            <div className="sign-in__submit">
              <button
                className="sign-in__btn"
                type="submit"
                disabled={!this.state.isFormValid}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>

        <Footer/>
      </div>
    );
  }
}

export default SignIn;
