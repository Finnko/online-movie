import React from 'react';
import renderer from 'react-test-renderer';
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
    thumb: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  },
  {
    id: `2`,
    title: `Bohemian Rhapsody`,
    thumb: `img/bohemian-rhapsody.jpg`,
  },
];

describe(`Main component render correctly`, () => {
  it(`Should Main component render correctly`, () => {
    const tree = renderer
      .create(
          <Main
            promo={promoMovieMock}
            movies={mocks}
          />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
