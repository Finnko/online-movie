import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list';

const mocks = [
  {
    id: `1`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    thumb: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  },
  {
    id: `2`,
    title: `Bohemian Rhapsody`,
    thumb: `img/bohemian-rhapsody.jpg`,
  },
];

describe(`MoviesList component render correctly`, () => {
  it(`Should MoviesList component render correctly`, () => {
    const tree = renderer
      .create(
          <MoviesList
            movies={mocks}
          />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
