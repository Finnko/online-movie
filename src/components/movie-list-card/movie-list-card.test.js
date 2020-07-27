import React from 'react';
import renderer from 'react-test-renderer';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import MovieListCard from './movie-list-card';

const mock = {
  id: 1,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  thumb: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
};

describe(`MovieListCard component render correctly`, () => {
  const history = createMemoryHistory();
  const onMovieMouseEnter = jest.fn();
  const onMovieMouseLeave = jest.fn();

  it(`Should MovieListCard with video render correctly`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <MovieListCard
              movie={mock}
              onMovieMouseLeave={onMovieMouseLeave}
              onMovieMouseEnter={onMovieMouseEnter}
              viewMode={`WITH_PLAYER`}
            />
          </Router>, {
            createNodeMock: () => {
              return {};
            },
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should MovieListCard without video render correctly`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <MovieListCard
              movie={mock}
              onMovieMouseLeave={onMovieMouseLeave}
              onMovieMouseEnter={onMovieMouseEnter}
              viewMode={`IMAGE`}
            />
          </Router>, {
            createNodeMock: () => {
              return {};
            },
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
