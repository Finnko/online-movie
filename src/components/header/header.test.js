import React from 'react';
import renderer from 'react-test-renderer';
import {createMemoryHistory} from 'history';
import {Link, Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import NameSpace from '../../store/name-space';
import configureStore from 'redux-mock-store';
import Header from './header';
import {PathName} from '../../const';


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

describe(`Header component render correctly`, () => {
  const history = createMemoryHistory();

  it(`Should Header component render correctly without children`, () => {
    const props = {
      className: ``,
      children: [],
    };

    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <Header {...props}/>
            </Router>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Header component render correctly with children`, () => {
    const props = {
      className: ``,
    };

    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <Header {...props}>
                <nav className="breadcrumbs">
                  <ul className="breadcrumbs__list">
                    <li className="breadcrumbs__item">
                      Main
                    </li>
                    <li className="breadcrumbs__item">
                      Details
                    </li>
                  </ul>
                </nav>
              </Header>
            </Router>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
