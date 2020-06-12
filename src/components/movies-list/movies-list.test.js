import React from 'react';
import renderer from 'react-test-renderer';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
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
    const history = createMemoryHistory();

    const tree = renderer
      .create(
          <Router history={history}>
            <MoviesList
              movies={mocks}
            />
          </Router>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
