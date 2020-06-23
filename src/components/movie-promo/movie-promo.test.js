import React from 'react';
import renderer from 'react-test-renderer';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import MoviePromo from './movie-promo.jsx';

const props = {
  title: ``,
  genre: `Comedy`,
  releaseYear: 2014,
  backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
};

describe(`MoviePromo component render correctly`, () => {
  it(`Should MoviePromo component render correctly with main view`, () => {
    const history = createMemoryHistory();

    const tree = renderer
      .create(
          <Router history={history}>
            <MoviePromo
              {...props}
              viewMode={`MAIN`}
            />
          </Router>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
