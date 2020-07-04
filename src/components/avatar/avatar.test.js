import React from 'react';
import renderer from 'react-test-renderer';
import Avatar from './avatar.jsx';

describe(`Avatar component render correctly`, () => {
  it(`Should Avatar component render correctly`, () => {
    const tree = renderer
      .create(
          <Avatar/>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
