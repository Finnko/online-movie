import React from 'react';
import renderer from 'react-test-renderer';
import ShowMore from './show-more.tsx';

describe(`ShowMore component render correctly`, () => {
  it(`Should ShowMore component render correctly`, () => {
    const tree = renderer
      .create(
          <ShowMore offset={8} onButtonClick={() => {}}/>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
