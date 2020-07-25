import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../../api/api';
import {Operation} from './operations';
import {actionTypes} from '../../action-types';
import {apiMockHandlers, promisifyApiMockReply} from '../../../utils/helpers';
import {adaptMovie, adaptMovies} from '../../../utils/adapter';

const requestId = 6;
const mockPromo = {
  [`background_color`]: `#A6B7AC`,
  [`background_image`]: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/gangs_of_new_york.jpg`,
  description: `In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the Butcher, his father's killer.`,
  director: `Martin Scorsese`,
  genre: `Crime`,
  id: 1,
  [`is_favorite`]: true,
  name: `Gangs of new york`,
  [`poster_image`]: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Gangs_of_New_York_Poster.jpg`,
  [`preview_image`]: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/gangs_of_new_york.jpg`,
  [`preview_video_link`]: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  rating: 8.8,
  released: 2002,
  [`run_time`]: 167,
  [`scores_count`]: 370881,
  starring: [`Leonardo DiCaprio`, `Cameron Diaz`, `Daniel Day-Lewis`],
  [`video_link`]: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
};
const mockMovies = [
  {
    [`background_color`]: `#A6B7AC`,
    [`background_image`]: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/gangs_of_new_york.jpg`,
    description: `In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the Butcher, his father's killer.`,
    director: `Martin Scorsese`,
    genre: `Crime`,
    id: 1,
    [`is_favorite`]: true,
    name: `Gangs of new york`,
    [`poster_image`]: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Gangs_of_New_York_Poster.jpg`,
    [`preview_image`]: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/gangs_of_new_york.jpg`,
    [`preview_video_link`]: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: 8.8,
    released: 2002,
    [`run_time`]: 167,
    [`scores_count`]: 370881,
    starring: [`Leonardo DiCaprio`, `Cameron Diaz`, `Daniel Day-Lewis`],
    [`video_link`]: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  },
  {
    [`background_color`]: `#B9B27E`,
    [`background_image`]: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/matrix.jpg`,
    description: `A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.`,
    director: `Wachowski Brothers`,
    genre: `Action`,
    id: 6,
    [`is_favorite`]: false,
    name: `Matrix`,
    [`poster_image`]: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/matrix.jpg`,
    [`preview_image`]: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/matrix.jpg`,
    [`preview_video_link`]: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: 4.4,
    released: 1999,
    [`run_time`]: 136,
    [`scores_count`]: 1503092,
    starring: [`Keanu Reeves`, `Laurence Fishburne`, `Carrie-Anne Moss`],
    [`video_link`]: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  },
];
const favoriteMockMovies = mockMovies.filter((item) => item[`is_favorite`]);
const updatedFavoriteFilm = {
  [`background_color`]: `#B9B27E`,
  [`background_image`]: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/matrix.jpg`,
  description: `A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.`,
  director: `Wachowski Brothers`,
  genre: `Action`,
  id: 6,
  [`is_favorite`]: true,
  name: `Matrix`,
  [`poster_image`]: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/matrix.jpg`,
  [`preview_image`]: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/matrix.jpg`,
  [`preview_video_link`]: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  rating: 4.4,
  released: 1999,
  [`run_time`]: 136,
  [`scores_count`]: 1503092,
  starring: [`Keanu Reeves`, `Laurence Fishburne`, `Carrie-Anne Moss`],
  [`video_link`]: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
};

describe(`User operations works correctly`, () => {
  const api = createAPI(apiMockHandlers);

  it(`Operation fetchAppData should make a correct API call to fetch app data`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchMoviesOperation = Operation.fetchMovies();

    apiMock
      .onGet(`/films`)
      .reply(() => promisifyApiMockReply(mockMovies));

    return fetchMoviesOperation(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: actionTypes.FETCH_MOVIES_SUCCESS,
          payload: adaptMovies(mockMovies),
        });
      })
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: actionTypes.FETCH_MOVIES_ERROR,
        });
      });
  });

  it(`Operation fetchPromo should make a correct API call to fetch promo data`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchPromoOperation = Operation.fetchPromo();

    apiMock
      .onGet(`films/promo`)
      .reply(() => promisifyApiMockReply(mockPromo));

    return fetchPromoOperation(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: actionTypes.FETCH_PROMO_SUCCESS,
          payload: adaptMovie(mockPromo),
        });
      })
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: actionTypes.FETCH_PROMO_ERROR,
        });
      });
  });

  it(`Operation fetchFavoriteMovies should make a correct API call to fetch favorites`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchFavoriteMoviesOperation = Operation.fetchFavoriteMovies();

    apiMock
      .onGet(`/favorite`)
      .reply(() => promisifyApiMockReply(favoriteMockMovies));

    return fetchFavoriteMoviesOperation(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: actionTypes.FETCH_FAVORITES_MOVIES_SUCCESS,
          payload: adaptMovies(favoriteMockMovies)
        });
      })
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: actionTypes.FETCH_FAVORITES_MOVIES_ERROR,
        });
      });
  });

  it(`Operation updateFavoriteStatus random movie should make a correct API call to update status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const status = 1; // adds to favorite
    const updateFavoriteStatusOperation = Operation.updateFavoriteStatus(requestId, status);

    apiMock
      .onPost(`/favorite/${requestId}/${status}`)
      .reply(() => promisifyApiMockReply(updatedFavoriteFilm));

    return updateFavoriteStatusOperation(dispatch, () => {}, api)
      .then(() => {

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: actionTypes.UPDATE_FAVORITE_STATUS_SUCCESS,
          payload: adaptMovie(updatedFavoriteFilm),
        });
      })
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: actionTypes.UPDATE_FAVORITE_STATUS_ERROR,
        });
      });
  });
});
