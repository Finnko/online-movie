import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';
import {Provider} from 'react-redux';
import NameSpace from '../../store/name-space';
import configureStore from 'redux-mock-store';

const promo = {
  title: ``,
  genre: `Comedy`,
  releaseYear: 2014,
  backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
};

const mock = [
  {
    id: `1`,
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    preview: `img/bohemian-rhapsody.jpg`,
    releaseYear: 2014,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
    description: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
    ],
    director: `Michael Bay`,
    actors: [`Leonardo Di Caprio`],
    rating: 7.5,
    ratingCount: 250,
    poster: `/img/the-grand-budapest-hotel-poster.jpg`,
  }
];

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.DATA]: {
    movies: mock,
    promo,
    loading: false,
    error: false,
  },
  [NameSpace.APP]: {
    activeGenre: `All genres`,
  }
});

describe(`App component render correctly`, () => {
  it(`Should App component render correctly`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <App />
          </Provider>, {
            createNodeMock: () => {
              return {};
            },
          }).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
