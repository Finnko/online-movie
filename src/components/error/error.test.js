import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Error from './error.jsx';

const mock = `Something went wrong`;

describe(`Error component render correctly`, () => {
  it(`Should Error component render correctly`, () => {
    const history = createMemoryHistory();

    const tree = renderer
      .create(
          <Router history={history}>
            <Error error={mock}/>
          </Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
