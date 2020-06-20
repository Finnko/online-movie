import React from 'react';
import renderer from 'react-test-renderer';
import MoviePromo from './movie-promo.jsx';

const props = {
  title: ``,
  genre: `Comedy`,
  releaseYear: 2014,
  backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  viewMode: `MAIN`
};

describe(`MoviePromo component render correctly`, () => {
  it(`Should MoviePromo component render correctly`, () => {
    const tree = renderer
      .create(
          <MoviePromo
            {...props}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
