import React from 'react';
import renderer from 'react-test-renderer';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import Header from './header';

describe(`Header component render correctly`, () => {
  it(`Should Header component render correctly`, () => {
    const history = createMemoryHistory();

    const tree = renderer
      .create(
          <Router history={history}>
            <Header/>
          </Router>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
