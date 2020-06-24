import React from 'react';
import renderer from 'react-test-renderer';
import Loader from './loader.jsx';

const mock = `small`;

describe(`Loader component render correctly`, () => {
  it(`Should Loader component render correctly`, () => {
    const tree = renderer
      .create(
          <Loader
            size={mock}
          />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
