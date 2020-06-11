import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

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

describe(`App component render correctly`, () => {
  it(`Should App component render correctly`, () => {
    const tree = renderer
      .create(
          <App
            promo={promoMovieMock}
            movies={mocks}
          />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
