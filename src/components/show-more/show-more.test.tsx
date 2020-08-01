import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ShowMore from './show-more';

describe(`ShowMore component render correctly`, () => {
  it(`Should ShowMore component render correctly`, () => {
    const tree = renderer
      .create(
          <ShowMore
            offset={8}
            onButtonClick={() => null}
          />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
