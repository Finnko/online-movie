import React from 'react';
import renderer from 'react-test-renderer';
import MovieReviews from './movie-reviews.jsx';

const mock = [
  {
    id: `1`,
    comment: `Good comment!`,
    rating: 8.9,
    user: `Ozzy Osbourne`,
    date: new Date(1583591483969)
  },
  {
    id: `2`,
    comment: `Neutral comment!`,
    rating: 5.9,
    user: `James Hatfield`,
    date: new Date(1593591555969)
  },
  {
    id: `3`,
    comment: `Bad comment!`,
    rating: 1.9,
    user: `Axl Rose`,
    date: new Date(1783591499969)
  },
];

describe(`MovieReviews component render correctly`, () => {
  it(`Should MovieReviews component render correctly`, () => {
    const tree = renderer
      .create(
          <MovieReviews
            reviews={mock}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
