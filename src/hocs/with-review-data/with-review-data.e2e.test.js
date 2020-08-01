import React from 'react';
import PropTypes from 'prop-types';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withReviewData from './with-review-data.tsx';
import RadioButton from '../../components/radio-button/radio-button.tsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const VALID_REVIEW = `Hello world! Hello world! Hello world! Hello world! Hello world! Hello world!`;

const MockComponent = ({
  review,
  rating,
  isFormValid,
  onInputChange,
}) => {
  return (
    <div>
      <div className="rating__stars">
        <RadioButton
          key={1}
          id={`star-1`}
          groupName="rating"
          checked={rating === 1}
          value="1"
          label={`Rating 1`}
          onRadioChange={onInputChange}
        />
      </div>
      <textarea
        className="add-review__textarea"
        name="review"
        id="review"
        placeholder="Review text"
        value={review}
        onChange={onInputChange}
      />
      <button
        className="add-review__btn"
        type="submit"
        disabled={!isFormValid}
      >
        Post
      </button>
    </div>
  );
};

MockComponent.propTypes = {
  review: PropTypes.string,
  rating: PropTypes.string,
  isFormValid: PropTypes.bool,
  onInputChange: PropTypes.func,
};

const MockComponentWrapped = withReviewData(MockComponent);

describe(`Test e2e hoc withReviewData`, () => {
  const textareaEvent = {
    target: {
      value: VALID_REVIEW,
      name: `review`,
    },
  };
  const ratingEvent = {
    target: {
      value: `1`,
      name: `rating`,
    },
  };

  it(`Should allow to send valid form`, () => {
    const wrapper = mount(
        <MockComponentWrapped />
    );

    const instance = wrapper.instance();

    const rating = wrapper.find(`input`);
    const textarea = wrapper.find(`textarea`);

    expect(wrapper.state().rating.value).toBe(``);
    expect(wrapper.state().review.value).toBe(``);
    expect(wrapper.state().isFormValid).toBe(false);

    rating.simulate(`change`, ratingEvent);
    textarea.simulate(`change`, textareaEvent);
    instance.setState({isFormValid: true});

    expect(wrapper.state().rating.value).toBe(`1`);
    expect(wrapper.state().review.value).toBe(VALID_REVIEW);
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
