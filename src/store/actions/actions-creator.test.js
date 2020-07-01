import {actionTypes} from '../action-types';
import {ActionCreator} from './action-creator';

const promo = {
  title: ``,
  genre: `Comedy`,
  releaseYear: 2014,
  backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
};

const movies = [
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
const reviews = [
  {
    id: `1`,
    comment: `Good comment!`,
    rating: 8.9,
    user: `Ozzy Osbourne`,
    date: new Date(1583591483969)
  },
  {
    id: `3`,
    comment: `Bad comment!`,
    rating: 1.9,
    user: `Axl Rose`,
    date: new Date(1783591499969)
  },
];

describe(`Action creators work correctly`, () => {
  it(`Action creator for fetching data returns correct action`, () => {
    expect(ActionCreator.fetchMoviesDataRequest()).toEqual({
      type: actionTypes.FETCH_MOVIES_DATA_REQUEST,
    });
  });

  it(`Action creator for fetching data returns correct action if error occured`, () => {
    expect(ActionCreator.fetchMoviesDataError()).toEqual({
      type: actionTypes.FETCH_MOVIES_DATA_ERROR,
    });
  });

  it(`Action creator for fetching data returns correct action and data if success`, () => {
    expect(ActionCreator.fetchMoviesDataSuccess(movies, promo, reviews)).toEqual({
      type: actionTypes.FETCH_MOVIES_DATA_SUCCESS,
      payload: {
        movies,
        promo,
        reviews,
      },
    });
  });

  it(`Action creator for change active genre returns action with payload genre`, () => {
    expect(ActionCreator.changeActiveGenre(`Crime`)).toEqual({
      type: actionTypes.CHANGE_ACTIVE_GENRE,
      payload: `Crime`,
    });
  });

  it(`Action creator for change movies limit returns action with payload limit`, () => {
    expect(ActionCreator.changeMoviesLimit(4)).toEqual({
      type: actionTypes.CHANGE_MOVIES_LIMIT,
      payload: 4,
    });
  });

  it(`Action creator for reset movies limit returns correct action`, () => {
    expect(ActionCreator.resetMoviesLimit()).toEqual({
      type: actionTypes.RESET_MOVIES_LIMIT,
    });
  });
});
