import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import NameSpace from '../../store/name-space';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import {Avatar} from './avatar.jsx';
import {AuthStatus} from '../../const';

const mockUser = {
  id: 1,
  email: `Oliver.conner@gmail.com`,
  name: `Oliver.conner`,
  avatarUrl: `img/1.png`
};

const props = {
  userInfo: mockUser,
};

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.USER]: {
    user: mockUser,
    authStatus: AuthStatus.NO_AUTH,
  }
});

describe(`Avatar component render correctly`, () => {
  it(`Should Avatar component render correctly when user not logged`, () => {
    const history = createMemoryHistory();

    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <Avatar authStatus={AuthStatus.NO_AUTH} {...props}/>
            </Router>
          </Provider>

      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Avatar component render correctly when user was authorized`, () => {
    const history = createMemoryHistory();

    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <Avatar authStatus={AuthStatus.AUTH} {...props}/>
            </Router>
          </Provider>

      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
