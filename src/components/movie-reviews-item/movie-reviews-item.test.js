import React from 'react';
import renderer from 'react-test-renderer';
import MovieReviewsItem from './movie-reviews-item.tsx';

const mockReview = {
  comment: `Good comment!`,
  date: `2020-07-09T16:06:01.831Z`,
  id: 2,
  rating: 9.3,
  user: {
    id: 15,
    name: `Ozzy Osbourne`
  },
};

describe(`MovieReviewsItem component render correctly`, () => {
  it(`Should MovieReviewsItem component render correctly`, () => {
    const tree = renderer
      .create(
          <MovieReviewsItem
            review={mockReview}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
