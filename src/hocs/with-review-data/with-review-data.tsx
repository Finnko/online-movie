import * as React from 'react';
import {Subtract} from 'utility-types';
import {Config} from '../../const';

type State = {
  isFormValid: boolean;
  rating: {
    value: string;
  };
  review: {
    value: string;
  };
}

type InjectingProps = {
  isFormValid: boolean;
  rating: string;
  review: string;
  onInputChange: () => void;
}

const withReviewData = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithReviewData extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        isFormValid: false,
        rating: {
          value: ``,
        },
        review: {
          value: ``,
        },
      };

      this._handleInputChange = this._handleInputChange.bind(this);
    }

    _handleInputChange(evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
      const {value, name} = evt.target;
      const {review, rating} = this.state;

      const isFormValid = review.value.length > Config.COMMENT_LENGTH.MIN &&
        review.value.length < Config.COMMENT_LENGTH.MAX && rating.value === ``;
      
      this.setState((prevState) => Object.assign({}, prevState, {
        [name]: {
          value,
        },
        isFormValid,
      }));
    }

    render() {
      const {
        rating,
        review,
        isFormValid,
      } = this.state;

      return (
        <Component
          {...this.props}
          review={review.value}
          rating={rating.value}
          isFormValid={isFormValid}
          onInputChange={this._handleInputChange}/>
      );
    }
  }

  return WithReviewData;
};

export default withReviewData;
