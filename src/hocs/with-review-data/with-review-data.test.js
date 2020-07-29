import React from 'react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import RadioButton from '../../components/radio-button/radio-button.jsx';
import withReviewData from './with-review-data';

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

describe(`Should hoc withReviewData render correctly`, () => {
  it(`Snapshot render withReviewData`, () => {
    const tree = renderer.create(<MockComponentWrapped />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
