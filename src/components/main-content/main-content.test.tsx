import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import NameSpace from '../../store/name-space';
import {Provider} from 'react-redux';
import {MainContent} from './main-content';
import {Movie} from "../../interfaces";

const mockMovies: Movie[] = [
  {
    id: 1,
    title: `The Grand Budapest Hotel`,
    poster: `/img/the-grand-budapest-hotel-poster.jpg`,
    thumb: `img/bohemian-rhapsody.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    videoSrc: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    releaseYear: 2014,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    backgroundColor: `#FDFDFC`,
    backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
    director: `Michael Bay`,
    rating: 7.5,
    ratingCount: 250,
    runTime: 185,
    actors: [`Leonardo Di Caprio`],
    genre: `Drama`,
    isFavorite: false,
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
    releaseYear: 2000,
    runTime: 104,
    ratingCount: 716577,
    actors: [`Jason Statham`, `Brad Pitt`, `Benicio Del Toro`],
    videoSrc: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  },
  {
    backgroundColor: `#B6A99F`,
    backgroundImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Fantastic_Beasts.jpg`,
    description: `In an effort to thwart Grindelwald's plans of raising pure-blood wizards to rule over all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he's unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.`,
    director: `David Yates`,
    genre: `Fantasy`,
    id: 15,
    isFavorite: false,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Fantastic_Beasts.jpg`,
    thumb: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: 3.4,
    releaseYear: 2018,
    runTime: 134,
    ratingCount: 160757,
    actors: [`Eddie Redmayne`, `Katherine Waterston`, `Dan Fogler`],
    videoSrc: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  }
];

const mockStore = configureStore([]);

const props = {
  filteredMovies: mockMovies,
  activeGenre: `All genres`,
  genres: [`All genres`, `Crime`, `Horror`],
  handleGenreChange: () => {},
  handleShowMoreClick: () => {},
};

describe(`MainContent component render correctly`, () => {
  it(`Should MainContent component render correctly with show more button`, () => {
    const history = createMemoryHistory();
    const store = mockStore({
      [NameSpace.MOVIES]: {
        movies: mockMovies,
      },
      [NameSpace.APP]: {
        activeGenre: `All genres`,
        renderLimit: 2,
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <MainContent
                {...props}
                renderLimit={2}
              />
            </Router>
          </Provider>, {
            createNodeMock: () => {
              return {};
            },
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should MainContent component render correctly without show more button`, () => {
    const history = createMemoryHistory();
    const store = mockStore({
      [NameSpace.MOVIES]: {
        movies: mockMovies,
      },
      [NameSpace.APP]: {
        activeGenre: `All genres`,
        renderLimit: 8,
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <MainContent
                {...props}
                renderLimit={8}
              />
            </Router>
          </Provider>, {
            createNodeMock: () => {
              return {};
            },
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
