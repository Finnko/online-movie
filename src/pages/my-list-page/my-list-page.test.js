import React from 'react';
import renderer from 'react-test-renderer';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import NameSpace from '../../store/name-space';
import {Provider} from 'react-redux';
import {MyListPage} from './my-list-page.jsx';
import {AuthStatus} from '../../const';

const mockMovies = [
  {
    backgroundColor: `#FDFDFC`,
    backgroundImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Snatch.jpg`,
    description: `Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.`,
    director: `Guy Ritchie`,
    genre: `Comedy`,
    id: 14,
    isFavorite: true,
    name: `Snatch`,
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
  {
    backgroundColor: `#B6A99F`,
    backgroundImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Fantastic_Beasts.jpg`,
    description: `In an effort to thwart Grindelwald's plans of raising pure-blood wizards to rule over all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he's unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.`,
    director: `David Yates`,
    genre: `Fantasy`,
    id: 15,
    isFavorite: true,
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Fantastic_Beasts.jpg`,
    thumb: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: 3.4,
    released: 2018,
    runTime: 134,
    ratingCount: 160757,
    starring: [`Eddie Redmayne`, `Katherine Waterston`, `Dan Fogler`],
    videoSrc: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  }
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
    loading: false,
    error: false,
    favorites: mockMovies,
  },
  [NameSpace.USER]: {
    user: mockUser,
    authStatus: AuthStatus.NO_AUTH,
  }
});

const props = {
  favorites: mockMovies,
  fetchFavoriteMovies: () => {},
};

describe(`MyListPage component render correctly`, () => {
  const history = createMemoryHistory();

  it(`Should MyListPage component render correctly`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <MyListPage
                {...props}
                error={false}
                loading={false}
              />
            </Router>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should MyListPage component render correctly with loading`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <MyListPage
                {...props}
                error={false}
                loading={true}
              />
            </Router>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should MyListPage component render correctly with error`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <MyListPage
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
