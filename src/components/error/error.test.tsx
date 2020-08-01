import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import NameSpace from '../../store/name-space';
import {Provider} from 'react-redux';
import Error from './error';

const mockUser = {
  id: 1,
  email: `Oliver.conner@gmail.com`,
  name: `Oliver.conner`,
  avatarUrl: `img/1.png`
};

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.USER]: {
    user: mockUser,
    authStatus: `NO_AUTH`,
  }
});

const mock = `Something went wrong`;

describe(`Error component render correctly`, () => {
  it(`Should Error component render correctly`, () => {
    const history = createMemoryHistory();

    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <Error error={mock}/>
            </Router>
          </Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
