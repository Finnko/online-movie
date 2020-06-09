import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card";

const mock = {
    id: `1`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    thumb: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
};

describe(`Main component render correctly`, () => {
  it(`Should Main component render correctly`, () => {
    const tree = renderer
      .create(
        <MovieCard
          movie={mock}
        />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
