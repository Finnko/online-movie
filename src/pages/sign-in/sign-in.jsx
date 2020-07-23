import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Operation as UserOperation} from '../../store/reducers/user/operations';
import {validateControl} from '../../utils/validation';
import {getErrorStatus, getLoadingStatus} from '../../store/reducers/user/selectors';
import {Config, Errors, LoaderSetup} from '../../const';
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import Input from '../../components/input/input.jsx';
import Loader from '../../components/loader/loader.jsx';

const inputNames = {
  email: `Email address`,
  password: `Password`,
};

const inputs = Object.keys(inputNames);


class SignIn extends PureComponent {
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
            minLength: Config.PASSWORD_MIN_LENGTH,
          }
        }
      }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
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

  handleFormSubmit(evt) {
    evt.preventDefault();

    const {email, password} = this.state.formControls;
    this.props.onFormSubmit({
      email: email.value,
      password: password.value,
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
    const {loading, error} = this.props;
    const {email, password} = this.state.formControls;

    return (
      <div className="user-page">
        <Header className={`user-page__head`}/>

        <div className="sign-in user-page__content">
          <form
            action="#"
            className="sign-in__form"
            onSubmit={this.handleFormSubmit}
          >
            <div className="sign-in__message">
              {!email.valid && email.touched && <p>{`${Errors.WRONG_EMAIL}`}</p>}
              {!password.valid && password.touched && <p>{`${Errors.WRONG_PASSWORD}${password.validation.minLength}`}</p>}
              {error && <p>{`${Errors.WRONG_LOGIN_DATA}`}</p>}
            </div>

            <div className="sign-in__fields">
              {this.renderInputs()}
            </div>

            <div className="sign-in__submit">

              <button
                className="sign-in__btn"
                type="submit"
                disabled={!this.state.isFormValid}
              >
                {loading &&
                  <Loader
                    size={LoaderSetup.SIZE.SMALL}
                    position={LoaderSetup.POSITION.ABSOLUTE}
                  />
                }
                {!loading && `Sign in` }
              </button>

            </div>
          </form>
        </div>

        <Footer/>
      </div>
    );
  }
}

SignIn.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    loading: getLoadingStatus(state),
    error: getErrorStatus(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit(authData) {
    dispatch(UserOperation.login(authData));
  }
});

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
