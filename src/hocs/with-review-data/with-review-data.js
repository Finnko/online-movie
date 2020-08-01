import React, {PureComponent} from 'react';
import {Config} from '../../const.ts';

const withReviewData = (Component) => {
  class WithReviewData extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isFormValid: false,
        rating: {
          value: ``
        },
        review: {
          value: ``,
        },
      };

      this._handleInputChange = this._handleInputChange.bind(this);
    }

    _handleInputChange(evt) {
      const {value, name} = evt.target;
      const {review, rating} = this.state;

      const isFormValid = review.value.length > Config.COMMENT_LENGTH.MIN &&
        review.value.length < Config.COMMENT_LENGTH.MAX
        || rating === ``;

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

  WithReviewData.propTypes = {};

  return WithReviewData;
};

export default withReviewData;
