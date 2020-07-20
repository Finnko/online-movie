import React from 'react';
import renderer from 'react-test-renderer';
import Loader from './loader.jsx';

const props = {
  position: `absolute`,
};

describe(`Loader component render correctly`, () => {
  it(`Should Loader component small size render correctly`, () => {
    const tree = renderer
      .create(
          <Loader
            size={`small`}
            {...props}
          />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Loader component medium size render correctly`, () => {
    const tree = renderer
      .create(
          <Loader
            size={`medium`}
            {...props}
          />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
