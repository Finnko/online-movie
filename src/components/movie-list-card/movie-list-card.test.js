import React from 'react';
import renderer from 'react-test-renderer';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import MovieListCard from './movie-list-card';

const mock = {
  id: `1`,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
 // isPlaying: true,
  videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  posterSrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

describe(`MovieListCard component render correctly`, () => {
  it(`Should MovieListCard component render correctly`, () => {
    const history = createMemoryHistory();

    const tree = renderer
      .create(
          <Router history={history}>
            <MovieListCard
              movie={mock}
            />
          </Router>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
