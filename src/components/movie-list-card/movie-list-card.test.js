import React from 'react';
import renderer from 'react-test-renderer';
import MovieListCard from './movie-list-card';

const mock = {
  id: `1`,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  thumb: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
};

describe(`MovieListCard component render correctly`, () => {
  it(`Should MovieListCard component render correctly`, () => {
    const tree = renderer
      .create(
          <MovieListCard
            movie={mock}
          />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
