import * as React from 'react';
import * as renderer from 'react-test-renderer';
import GenresList from './genres-list';

const props = {
  activeItem: `All genres`,
  onActiveItemChange: () => {},
  onGenreChange: () => {},
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
