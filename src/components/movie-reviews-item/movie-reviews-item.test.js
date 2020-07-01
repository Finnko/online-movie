import React from 'react';
import renderer from 'react-test-renderer';
import MovieReviewsItem from './movie-reviews-item.jsx';

const props = {
  id: `1`,
  comment: `Good comment!`,
  rating: 8.9,
  user: `Ozzy Osbourne`,
  date: new Date(1583591483969)
};

describe(`MovieReviewsItem component render correctly`, () => {
  it(`Should MovieReviewsItem component render correctly`, () => {
    const tree = renderer
      .create(
          <MovieReviewsItem
            {...props}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
