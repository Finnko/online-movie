import {ActionCreator} from '../../actions/action-creator';
import {adaptMovies, adaptMovie} from '../../../utils/adapter';
import NameSpace from '../../name-space';

const Operation = {
  fetchAppData: () => (dispatch, _, api) => {
    const requestMovies = api.get(`/films`);
    const requestPromo = api.get(`films/promo`);

    dispatch(ActionCreator.fetchMoviesDataRequest());

    return Promise.all([
      requestMovies,
      requestPromo,
    ])
      .then(([movies, promo]) => {
        const adaptedMovies = adaptMovies(movies.data);
        const adaptedPromo = adaptMovie(promo.data);

        dispatch(ActionCreator.fetchMoviesDataSuccess(adaptedMovies, adaptedPromo));
      })
      .catch(() => {
        dispatch(ActionCreator.fetchMoviesDataError());
      });
  },
  fetchPromo: () => (dispatch, _, api) => {
    return api.get(`films/promo`)
      .then(({data}) => {
        const movie = adaptMovie(data);

        dispatch(ActionCreator.fetchPromo((movie)));
      });
  },
  fetchFavoriteMovies: () => (dispatch, _, api) => {
    dispatch(ActionCreator.fetchFavoritesRequest());

    return api.get(`/favorite`)
      .then(({data}) => {
        const adaptedMovies = adaptMovies(data);

        dispatch(ActionCreator.fetchFavoritesSuccess(adaptedMovies));
      })
      .catch(() => {
        dispatch(ActionCreator.fetchFavoritesError());
      });
  },
  updateFavoriteStatus: (id, status) => (dispatch, getState, api) => {
    dispatch(ActionCreator.updateFavoriteStatusRequest());

    return api.post(`/favorite/${id}/${status}`)
      .then(({data}) => {
        const movie = adaptMovie(data);
        const state = getState();

        if (state[NameSpace.MOVIES].promo.id === movie.id) {
          dispatch(Operation.fetchPromo(movie));
        }

        dispatch(ActionCreator.updateFavoriteStatusSuccess(movie));
      })
      .catch(() => {
        dispatch(ActionCreator.updateFavoriteStatusError());
      });
  }
};

export {Operation};
