import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MovieOverview from './movie-overview';

const props = {
  genre: `drama`,
  director: `Wes Bos`,
  rating: 5.5,
  ratingCount: 199,
  actors: [`Ozzy Osbourne`, `Emilia Clarke`],
  description: `Something, something Else`,
};

describe(`MovieOverview component render correctly`, () => {
  it(`Should MovieOverview component render correctly`, () => {
    const tree = renderer
      .create(
          <MovieOverview
            {...props}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
