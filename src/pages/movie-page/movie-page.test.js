import React from 'react';
import renderer from 'react-test-renderer';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import NameSpace from '../../store/name-space';
import {MoviePage} from './movie-page';
import {Provider} from 'react-redux';
import {AuthStatus} from '../../const.ts';

const currentMovie = {
  id: 1,
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  thumb: `img/bohemian-rhapsody.jpg`,
  releaseYear: 2014,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  backgroundColor: `#FDFDFC`,
  backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  director: `Michael Bay`,
  actors: [`Leonardo Di Caprio`],
  rating: 7.5,
  ratingCount: 250,
  isFavorite: false,
  poster: `/img/the-grand-budapest-hotel-poster.jpg`,
};
const mockMovies = [
  {
    id: 1,
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    thumb: `img/bohemian-rhapsody.jpg`,
    releaseYear: 2014,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    backgroundColor: `#FDFDFC`,
    backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    director: `Michael Bay`,
    actors: [`Leonardo Di Caprio`],
    rating: 7.5,
    ratingCount: 250,
    isFavorite: false,
    poster: `/img/the-grand-budapest-hotel-poster.jpg`,
  }, {
    backgroundColor: `#FDFDFC`,
    backgroundImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Snatch.jpg`,
    description: `Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.`,
    director: `Guy Ritchie`,
    genre: `Comedy`,
    id: 14,
    isFavorite: false,
    title: `Snatch`,
    poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Snatch.jpg`,
    thumb: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/snatch.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: 0.2,
    released: 2000,
    runTime: 104,
    ratingCount: 716577,
    starring: [`Jason Statham`, `Brad Pitt`, `Benicio Del Toro`],
    videoSrc: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  },
];
const mockUser = {
  id: 1,
  email: `Oliver.conner@gmail.com`,
  name: `Oliver.conner`,
  avatarUrl: `img/1.png`
};

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.MOVIES]: {
    movies: mockMovies,
    promo: currentMovie,
    loading: false,
    error: false,
    favoriteLoading: false,
    favoriteError: false,
    errorText: ``,
  },
  [NameSpace.APP]: {
    activeGenre: `All genres`,
    renderLimit: 8,
  },
  [NameSpace.USER]: {
    user: mockUser,
    authStatus: AuthStatus.NO_AUTH,
  }
});

const props = {
  currentMovie,
  renderLimit: 8,
  similarMovies: [],
  favoriteLoading: false,
  favoriteError: false,
  authStatus: AuthStatus.NO_AUTH,
  updateFavoriteStatus: () => {},
};

describe(`MoviePage component render correctly`, () => {
  const history = createMemoryHistory();

  it(`Should MoviePage component render correctly`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <MoviePage
                {...props}
                error={false}
                loading={false}
              />
            </Router>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should MoviePage component render correctly with loading`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <MoviePage
                {...props}
                error={false}
                loading={true}
              />
            </Router>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should MoviePage component render correctly with error`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <MoviePage
                {...props}
                error={true}
                loading={false}
              />
            </Router>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
