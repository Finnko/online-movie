import * as React from 'react';
import {connect} from 'react-redux';
import {Operation as UserOperation} from '../../store/reducers/user/operations';
import {getErrorStatus, getLoadingStatus} from '../../store/reducers/user/selectors';
import {Config, Errors, LoaderSetup} from '../../const';
import {validateControl} from '../../utils/validation';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Input from '../../components/input/input';
import Loader from '../../components/loader/loader';
import {FormField} from "../../interfaces";

const inputNames = {
  email: `Email address`,
  password: `Password`,
};

type State = {
  isFormValid: boolean;
  formControls: {
    email: FormField;
    password: FormField;
  };
}

type SignInProps = {
  loading: boolean;
  error: boolean;
  onFormSubmit: ({}) => void;
}

class SignIn extends React.PureComponent<SignInProps, State> {
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

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handleInputChange = this._handleInputChange.bind(this);
  }

  _handleInputChange(evt: React.ChangeEvent<HTMLInputElement>): void {
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

  _handleFormSubmit(evt: React.FormEvent<HTMLFormElement>): void {
    evt.preventDefault();

    const {email, password} = this.state.formControls;
    this.props.onFormSubmit({
      email: email.value,
      password: password.value,
    });
  }

  renderInputs() {
    const {loading} = this.props;

    return Object.keys(this.state.formControls).map((name, index) => {
      const {
        value,
        valid,
        touched,
        validation
      } = this.state.formControls[name];

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
          disabled={loading}
          onInputChange={this._handleInputChange}
        />
      );
    });
  }

  render() {
    const {
      loading,
      error,
    } = this.props;

    const {email, password} = this.state.formControls;

    return (
      <div className="user-page">
        <Header className={`user-page__head`}/>

        <div className="sign-in user-page__content">
          <form
            action="#"
            className="sign-in__form"
            onSubmit={this._handleFormSubmit}
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
                    style={LoaderSetup.POSITION.ABSOLUTE}
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
