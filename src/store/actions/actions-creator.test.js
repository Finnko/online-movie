import {actionTypes} from '../action-types';
import {ActionCreator} from './action-creator';

const promo = {
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
const movies = [
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
    backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
    backgroundColor: `#f5f5f5`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    director: `Wes Andreson`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `William Dafoe`],
    runTime: 199,
    rating: 5.6,
    ratingCount: 278,
    isFavorite: false,
  },
];
const commentsMock = [
  {
    comment: `This movie really touched my heart, it really is the best movie of the year and everyone should see this masterpiece.`,
    date: `2020-07-06T16:06:01.831Z`,
    id: 1,
    rating: 4.3,
    user: {
      id: 11,
      name: `Jack`
    },
  },
  {
    comment: `The editing is a mess, and the transitions of the plot or characters are rather strange. There is no narrative focus and the storytelling is unbalanced. I cannot really understand why such a bad movie received an overwhelming approval from the critics. `,
    date: `2020-07-09T16:06:01.831Z`,
    id: 2,
    rating: 9.3,
    user: {
      id: 15,
      name: `Kendall`
    },
  }
];
const userMock = {
  avatarUrl: `/wtw/static/avatar/2.jpg`,
  email: `finko85@gmail.com`,
  id: 1,
  name: `finko85`,
};
const favoriteMockMovies = movies.filter((item) => item.isFavorite);
const updatedFavoriteFilm = {
  id: 4,
  title: `Aviator`,
  genre: `Comedies`,
  thumb: `img/aviator.jpg`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  poster: `img/bg-the-grand-budapest-hotel.jpg`,
  releaseYear: 2017,
  backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
  backgroundColor: `#f5f5f5`,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  director: `Wes Andreson`,
  actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `William Dafoe`],
  runTime: 199,
  rating: 5.6,
  ratingCount: 278,
  isFavorite: true,
};

describe(`Action creators work correctly`, () => {
  it(`Action creator for fetching movies and promo data returns correct action`, () => {
    expect(ActionCreator.fetchMoviesRequest()).toEqual({
      type: actionTypes.FETCH_MOVIES_REQUEST,
    });
  });

  it(`Action creator for fetching movies and promo data returns correct action if error occurred`, () => {
    expect(ActionCreator.fetchMoviesError()).toEqual({
      type: actionTypes.FETCH_MOVIES_ERROR,
    });
  });

  it(`Action creator for fetching movies and promo data returns correct action and data if success`, () => {
    expect(ActionCreator.fetchMoviesSuccess(movies, promo)).toEqual({
      type: actionTypes.FETCH_MOVIES_SUCCESS,
      payload: movies,
    });
  });

  it(`Action creator for fetching promo data returns correct action and data if error occurred`, () => {
    expect(ActionCreator.fetchPromoError()).toEqual({
      type: actionTypes.FETCH_PROMO_ERROR,
    });
  });

  it(`Action creator for fetching promo data returns correct action and data if success`, () => {
    expect(ActionCreator.fetchPromoSuccess(promo)).toEqual({
      type: actionTypes.FETCH_PROMO_SUCCESS,
      payload: promo,
    });
  });

  it(`Action creator for fetching favorites movies returns correct action`, () => {
    expect(ActionCreator.fetchFavoritesRequest()).toEqual({
      type: actionTypes.FETCH_FAVORITES_MOVIES_REQUEST,
    });
  });

  it(`Action creator for fetching favorites movies returns correct action if error occurred`, () => {
    expect(ActionCreator.fetchFavoritesError()).toEqual({
      type: actionTypes.FETCH_FAVORITES_MOVIES_ERROR,
    });
  });

  it(`Action creator for fetching favorites movies returns correct action and data if success`, () => {
    expect(ActionCreator.fetchFavoritesSuccess(favoriteMockMovies)).toEqual({
      type: actionTypes.FETCH_FAVORITES_MOVIES_SUCCESS,
      payload: favoriteMockMovies,
    });
  });

  it(`Action creator for updating favorite movie returns correct action`, () => {
    expect(ActionCreator.updateFavoriteStatusRequest()).toEqual({
      type: actionTypes.UPDATE_FAVORITE_STATUS_REQUEST,
    });
  });

  it(`Action creator for updating favorite movie returns correct action if error occurred`, () => {
    expect(ActionCreator.updateFavoriteStatusError()).toEqual({
      type: actionTypes.UPDATE_FAVORITE_STATUS_ERROR,
    });
  });

  it(`Action creator for updating favorite movie returns correct action and data if success`, () => {
    expect(ActionCreator.updateFavoriteStatusSuccess(updatedFavoriteFilm)).toEqual({
      type: actionTypes.UPDATE_FAVORITE_STATUS_SUCCESS,
      payload: updatedFavoriteFilm,
    });
  });

  it(`Action creator for change error text returns action with payload`, () => {
    expect(ActionCreator.setError(`Error`)).toEqual({
      type: actionTypes.SET_ERROR,
      payload: `Error`,
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

  it(`Action creator for change auth status returns action with payload`, () => {
    expect(ActionCreator.setAuth(`AUTH`)).toEqual({
      type: actionTypes.SET_AUTH,
      payload: `AUTH`,
    });
  });

  it(`Action creator for login request returns correct action`, () => {
    expect(ActionCreator.loginRequest()).toEqual({
      type: actionTypes.LOGIN_REQUEST,
    });
  });

  it(`Action creator  for login request returns correct action if error occurred`, () => {
    expect(ActionCreator.loginError()).toEqual({
      type: actionTypes.LOGIN_ERROR,
    });
  });

  it(`Action creator for login request returns correct action and data if success`, () => {
    expect(ActionCreator.loginSuccess()).toEqual({
      type: actionTypes.LOGIN_SUCCESS,
    });
  });

  it(`Action creator for authorize user returns correct action with payload`, () => {
    expect(ActionCreator.changeUserData(userMock)).toEqual({
      type: actionTypes.AUTHORIZE_USER,
      payload: userMock,
    });
  });

  it(`Action creator for fetching comments data returns correct action`, () => {
    expect(ActionCreator.fetchCommentsRequest()).toEqual({
      type: actionTypes.FETCH_COMMENTS_REQUEST,
    });
  });

  it(`Action creator for fetching comments data returns correct action if error occurred`, () => {
    expect(ActionCreator.fetchCommentsError()).toEqual({
      type: actionTypes.FETCH_COMMENTS_ERROR,
    });
  });

  it(`Action creator for fetching comments data returns correct action and data if success`, () => {
    expect(ActionCreator.fetchCommentsSuccess(commentsMock)).toEqual({
      type: actionTypes.FETCH_COMMENTS_SUCCESS,
      payload: commentsMock,
    });
  });

  it(`Action creator for sending comment returns correct action`, () => {
    expect(ActionCreator.sendCommentRequest()).toEqual({
      type: actionTypes.SEND_COMMENT_REQUEST,
    });
  });

  it(`Action creator for sending comment returns correct action if error occured`, () => {
    expect(ActionCreator.sendCommentError()).toEqual({
      type: actionTypes.SEND_COMMENT_ERROR,
    });
  });

  it(`Action creator for sending comment returns correct action and data if success`, () => {
    expect(ActionCreator.sendCommentSuccess()).toEqual({
      type: actionTypes.SEND_COMMENT_SUCCESS,
    });
  });
});
