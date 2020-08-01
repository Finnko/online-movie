import * as React from 'react';
import * as renderer from 'react-test-renderer';
import RadioButton from '../../components/radio-button/radio-button';
import withReviewData from './with-review-data';

type MockComponentProps = {
  review: string;
  rating: string;
  isFormValid: boolean;
  onInputChange: () => void;
}

const MockComponent = (props: MockComponentProps) => {
  const {
    review,
    rating,
    isFormValid,
    onInputChange,
  } = props;

  return (
    <div>
      <div className="rating__stars">
        <RadioButton
          key={1}
          id={`star-1`}
          groupName="rating"
          checked={rating === `1`}
          value="1"
          label={`Rating 1`}
          disabled={false}
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

const MockComponentWrapped = withReviewData(MockComponent);

describe(`Should hoc withReviewData render correctly`, () => {
  it(`Snapshot render withReviewData`, () => {
    const tree = renderer.create(<MockComponentWrapped />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
