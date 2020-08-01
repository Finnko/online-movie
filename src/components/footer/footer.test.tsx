import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import Footer from './footer';

describe(`Footer component render correctly`, () => {
  it(`Should Footer component render correctly`, () => {
    const history = createMemoryHistory();

    const tree = renderer
      .create(
          <Router history={history}>
            <Footer/>
          </Router>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
