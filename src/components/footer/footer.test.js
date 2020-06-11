import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './footer';

describe(`Footer component render correctly`, () => {
  it(`Should Footer component render correctly`, () => {
    const tree = renderer
      .create(
          <Footer/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
