import React from 'react';
import renderer from 'react-test-renderer';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import Main from './main';

const promoMovieMock = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014,
};

const mocks = [
  {
    id: `1`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    preview: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  },
  {
    id: `2`,
    title: `Bohemian Rhapsody`,
    preview: `img/bohemian-rhapsody.jpg`,
  },
];

describe(`Main component render correctly`, () => {
  it(`Should Main component render correctly`, () => {
    const history = createMemoryHistory();

    const tree = renderer
      .create(
          <Router history={history}>
            <Main
              promo={promoMovieMock}
              movies={mocks}
            />
          </Router>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
