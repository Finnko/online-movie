import React from 'react';
import renderer from 'react-test-renderer';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import NameSpace from '../../store/name-space';
import {Provider} from 'react-redux';
import {PlayerPage} from './player-page';

const mock = {
  backgroundColor: `#FDFDFC`,
  backgroundImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Snatch.jpg`,
  description: `Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.`,
  director: `Guy Ritchie`,
  genre: `Comedy`,
  id: 14,
  isFavorite: true,
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
};


const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.MOVIES]: {
    movies: mock,
  },
});

const props = {
  currentMovie: mock,
};

describe(`PlayerPage component render correctly`, () => {
  const history = createMemoryHistory();

  it(`Should PlayerPage component render correctly`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <PlayerPage
                {...props}
              />
            </Router>
          </Provider>,
          {
            createNodeMock: () => {
              return {};
            }
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
