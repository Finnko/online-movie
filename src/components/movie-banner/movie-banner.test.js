import React from 'react';
import renderer from 'react-test-renderer';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import MovieBanner from './movie-banner.jsx';

const props = {
  title: ``,
  genre: `Comedy`,
  releaseYear: 2014,
  backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
};

describe(`MovieBanner component render correctly`, () => {
  it(`Should MovieBanner component render correctly with main view`, () => {
    const history = createMemoryHistory();

    const tree = renderer
      .create(
          <Router history={history}>
            <MovieBanner
              {...props}
              viewMode={`MAIN`}
            />
          </Router>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
