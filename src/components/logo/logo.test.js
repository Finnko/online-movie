import React from 'react';
import renderer from 'react-test-renderer';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import Logo from './logo.tsx';

describe(`Logo component render correctly`, () => {
  it(`Should Logo component render correctly`, () => {
    const history = createMemoryHistory();

    const tree = renderer
      .create(
          <Router history={history}>
            <Logo/>
          </Router>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
