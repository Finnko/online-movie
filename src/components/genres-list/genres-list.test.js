import React from 'react';
import renderer from 'react-test-renderer';
import GenresList from './genres-list';

const props = {
  activeItem: `All genres`,
  onActiveItemChange: jest.fn(),
  onGenreChange: jest.fn(),
  genres: [`All genres`, `Crime`, `Horror`],
};

describe(`GenresList component render correctly`, () => {
  it(`Should GenresList component render correctly`, () => {
    const tree = renderer
      .create(
          <GenresList
            {...props}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
