import React from 'react';
import renderer from 'react-test-renderer';
import {MovieReviews} from './movie-reviews.tsx';

const reviewMock = [
  {
    id: 1,
    comment: `Good comment!`,
    rating: 8.9,
    user: {
      name: `Ozzy Osbourne`,
      id: 1,
    },
    date: `2020-07-09T16:06:01.831Z`,
  },
  {
    id: 1,
    comment: `Good comment!`,
    rating: 8.9,
    user: {
      name: `Axl Rose`,
      id: 1,
    },
    date: `2020-07-09T16:06:01.831Z`,
  },
];

const props = {
  movieId: 12,
  reviews: reviewMock,
  fetchCommentsData: () => {},
};

describe(`MovieReviews component render correctly`, () => {
  it(`Should MovieReviews component render correctly `, () => {
    const tree = renderer
      .create(
          <MovieReviews
            {...props}
            loading={false}
            error={false}
            onceLoaded={false}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should MovieReviews component render correctly on loading`, () => {
    const tree = renderer
      .create(
          <MovieReviews
            {...props}
            loading={true}
            error={false}
            onceLoaded={false}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should MovieReviews component render correctly when error occurred`, () => {
    const tree = renderer
      .create(
          <MovieReviews
            {...props}
            loading={false}
            error={true}
            onceLoaded={false}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should MovieReviews component render correctly without comments`, () => {
    const tree = renderer
      .create(
          <MovieReviews
            movieId={12}
            reviews={[]}
            fetchCommentsData={() => {}}
            loading={false}
            error={false}
            onceLoaded={true}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
