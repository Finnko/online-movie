import React from 'react';
import renderer from 'react-test-renderer';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import NameSpace from '../../store/name-space';
import {AuthStatus} from '../../const.ts';
import MovieBanner from './movie-banner.jsx';

const mock = {
  id: 1,
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  thumb: `img/bohemian-rhapsody.jpg`,
  releaseYear: 2014,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  director: `Michael Bay`,
  actors: [`Leonardo Di Caprio`],
  rating: 7.5,
  ratingCount: 250,
  isFavorite: false,
  poster: `/img/the-grand-budapest-hotel-poster.jpg`,
};
const mockUser = {
  id: 1,
  email: `Oliver.conner@gmail.com`,
  name: `Oliver.conner`,
  avatarUrl: `img/1.png`
};

const props = {
  movie: mock,
  isAuth: true,
  updateFavoriteStatus: () => {},
};

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.USER]: {
    user: mockUser,
    authStatus: AuthStatus.NO_AUTH,
  }
});

describe(`MovieBanner component render correctly`, () => {
  it(`Should MovieBanner component render correctly with main view`, () => {
    const history = createMemoryHistory();

    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <MovieBanner
                {...props}
                loading={false}
                error={false}
                viewMode={`MAIN`}
              />
            </Router>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should MovieBanner component render correctly with details view`, () => {
    const history = createMemoryHistory();

    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <MovieBanner
                {...props}
                loading={false}
                error={false}
                viewMode={`DETAILS`}
              />
            </Router>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should MovieBanner component render correctly with loading`, () => {
    const history = createMemoryHistory();

    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <MovieBanner
                {...props}
                loading={true}
                error={false}
                viewMode={`DETAILS`}
              />
            </Router>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should MovieBanner component render correctly with error`, () => {
    const history = createMemoryHistory();

    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <MovieBanner
                {...props}
                loading={false}
                error={true}
                viewMode={`DETAILS`}
              />
            </Router>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
