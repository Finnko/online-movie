import React from 'react';
import renderer from 'react-test-renderer';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import MovieListCard from './movie-list-card';

const mock = {
  id: `1`,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  preview: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  reviews: [{
    id: `1`,
    comment: `Good comment!`,
    rating: 8.9,
    user: `Ozzy Osbourne`,
    date: new Date(1583591483969)
  }]
};

const activeItemId = `1`;

describe(`MovieListCard component render correctly`, () => {
  it(`Should MovieListCard component render correctly`, () => {
    const history = createMemoryHistory();
    const onMovieMouseEnter = jest.fn();
    const onMovieMouseLeave = jest.fn();

    const tree = renderer
      .create(
          <Router history={history}>
            <MovieListCard
              movie={mock}
              activeItemId={activeItemId}
              onMovieMouseLeave={onMovieMouseLeave}
              onMovieMouseEnter={onMovieMouseEnter}
            />
          </Router>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
