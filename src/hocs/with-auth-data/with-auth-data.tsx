import * as React from 'react';
import {Subtract} from 'utility-types';
import {Config} from '../../const';
import {validateControl} from '../../utils/validation';
import {FormField} from "../../interfaces";

type State = {
  isFormValid: boolean;
  formControls: {
    email: FormField;
    password: FormField;
  };
}

type InjectingProps = {
  formControls: {
    email: FormField;
    password: FormField;
  };
  isFormValid: boolean;
  onInputChange: () => void;
}

const withAuthData = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithAuthData extends React.PureComponent<T, State> {
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

    render() {
      const {
        formControls,
        isFormValid,
      } = this.state;

      return (
        <Component
          {...this.props}
          formControls={formControls}
          isFormValid={isFormValid}
          onInputChange={this._handleInputChange}/>
      );
    }
  }

  return WithAuthData;
};

export default withAuthData;
