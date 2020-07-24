import {actionTypes} from '../../action-types';
import moviesReducer from './movies-reducer';

const initialState = {
  error: false,
  loading: false,
  errorText: ``,
  movies: [],
  promo: {},
  favorites: [],
  favoriteLoading: false,
  favoriteError: false,
};

const mockPromo = {
  id: 1,
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  thumb: `img/aviator.jpg`,
  preview: `https://upload.wikimedia.org/wikipedia/commons/7/72/Landwasserviadukt%2C_aerial_video.webm`,
  videoSrc: `https://upload.wikimedia.org/wikipedia/commons/7/72/Landwasserviadukt%2C_aerial_video.webm`,
  poster: `/img/the-grand-budapest-hotel-poster.jpg`,
  releaseYear: 2014,
  backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
  backgroundColor: `#f5f5f5`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  director: `Michael Bay`,
  actors: [`Leonardo Di Caprio`],
  runTime: 202,
  rating: 7.5,
  ratingCount: 250,
  isFavorite: true,
};

const mockMovies = [
  {
    id: 1,
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    thumb: `img/aviator.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/7/72/Landwasserviadukt%2C_aerial_video.webm`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/7/72/Landwasserviadukt%2C_aerial_video.webm`,
    poster: `/img/the-grand-budapest-hotel-poster.jpg`,
    releaseYear: 2014,
    backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
    backgroundColor: `#f5f5f5`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    director: `Michael Bay`,
    actors: [`Leonardo Di Caprio`],
    runTime: 202,
    rating: 7.5,
    ratingCount: 250,
    isFavorite: true,
  },
  {
    id: 4,
    title: `Aviator`,
    genre: `Comedies`,
    thumb: `img/aviator.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    poster: `img/bg-the-grand-budapest-hotel.jpg`,
    releaseYear: 2017,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    director: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `William Dafoe`],
    runTime: 199,
    rating: 5.6,
    ratingCount: 278,
    isFavorite: false,
  },
];

describe(`Movies reducer works correctly`, () => {
  it(`Movies reducer without additional parameters should return initial state`, () => {
    expect(moviesReducer(void 0, {})).toEqual(initialState);
  });

  it(`Movies reducer should change loading value when the request is sent`, () => {
    expect(moviesReducer({
      loading: false
    }, {
      type: actionTypes.FETCH_MOVIES_DATA_REQUEST,
    })).toEqual({
      loading: true,
    });
  });

  it(`Movies reducer should change loading and error value when the error is occurred`, () => {
    expect(moviesReducer(initialState, {
      type: actionTypes.FETCH_MOVIES_DATA_ERROR,
    })).toEqual({
      error: true,
      loading: false,
      errorText: ``,
      movies: [],
      promo: {},
      favorites: [],
      favoriteLoading: false,
      favoriteError: false,
    });
  });

  it(`Movies reducer should change data on success`, () => {
    expect(moviesReducer(initialState, {
      type: actionTypes.FETCH_MOVIES_DATA_SUCCESS,
      payload: {
        movies: mockMovies,
        promo: mockPromo,
      }
    })).toEqual({
      error: false,
      loading: false,
      movies: mockMovies,
      promo: mockPromo,
      errorText: ``,
      favorites: [],
      favoriteLoading: false,
      favoriteError: false,
    });
  });

  it(`Movies reducer should change promo data on success`, () => {
    expect(moviesReducer(initialState, {
      type: actionTypes.FETCH_PROMO,
      payload: mockPromo,
    })).toEqual({
      error: false,
      loading: false,
      movies: [],
      promo: mockPromo,
      errorText: ``,
      favorites: [],
      favoriteLoading: false,
      favoriteError: false,
    });
  });

  it(`Movies reducer should set correct error`, () => {
    expect(moviesReducer(initialState, {
      type: actionTypes.SET_ERROR,
      payload: `Error`,
    })).toEqual({
      error: false,
      loading: false,
      movies: [],
      promo: {},
      errorText: `Error`,
      favorites: [],
      favoriteLoading: false,
      favoriteError: false,
    });
  });

  it(`Movies reducer should change loading value when request for featured movies was sent`, () => {
    expect(moviesReducer(initialState, {
      type: actionTypes.FETCH_FAVORITES_MOVIES_REQUEST,
    })).toEqual({
      error: false,
      loading: true,
      errorText: ``,
      movies: [],
      promo: {},
      favorites: [],
      favoriteLoading: false,
      favoriteError: false,
    });
  });

  it(`Movies reducer should change loading and error value when the error is occurred fetching favorites`, () => {
    expect(moviesReducer(initialState, {
      type: actionTypes.FETCH_FAVORITES_MOVIES_ERROR,
    })).toEqual({
      error: true,
      loading: false,
      errorText: ``,
      movies: [],
      promo: {},
      favorites: [],
      favoriteLoading: false,
      favoriteError: false,
    });
  });

  it(`Movies reducer should change data on success`, () => {
    expect(moviesReducer(initialState, {
      type: actionTypes.FETCH_FAVORITES_MOVIES_SUCCESS,
      payload: {
        favorites: mockMovies,
      }
    })).toEqual({
      error: false,
      loading: false,
      movies: [],
      promo: {},
      errorText: ``,
      favorites: mockMovies,
      favoriteLoading: false,
      favoriteError: false,
    });
  });

  it(`Movies reducer should change loading value when request for update favorite was sent`, () => {
    expect(moviesReducer(initialState, {
      type: actionTypes.UPDATE_FAVORITE_STATUS_REQUEST,
    })).toEqual({
      error: false,
      loading: false,
      errorText: ``,
      movies: [],
      promo: {},
      favorites: [],
      favoriteLoading: true,
      favoriteError: false,
    });
  });

  it(`Movies reducer should change loading and error value when the error is occurred fetching favorites`, () => {
    expect(moviesReducer(initialState, {
      type: actionTypes.FETCH_FAVORITES_MOVIES_ERROR,

    })).toEqual({
      error: true,
      loading: false,
      errorText: ``,
      movies: [],
      promo: {},
      favorites: [],
      favoriteLoading: true,
      favoriteError: false,
    });
  });

  it(`Movies reducer should change data on success`, () => {
    expect(moviesReducer(initialState, {
      type: actionTypes.FETCH_FAVORITES_MOVIES_SUCCESS,
      payload: {
        favorites: mockMovies,
      }
    })).toEqual({
      error: false,
      loading: false,
      movies: [],
      promo: {},
      errorText: ``,
      favorites: mockMovies,
      favoriteLoading: false,
      favoriteError: false,
    });
  });
});
