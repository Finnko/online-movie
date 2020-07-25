import {ActionCreator} from '../../actions/action-creator';
import {adaptMovies, adaptMovie} from '../../../utils/adapter';

const Operation = {
  fetchMovies: () => (dispatch, _, api) => {
    dispatch(ActionCreator.fetchMoviesRequest());

    return api.get(`/films`)
      .then(({data}) => {
        const adaptedMovies = adaptMovies(data);

        dispatch(ActionCreator.fetchMoviesSuccess(adaptedMovies));
      })
      .catch(() => {
        dispatch(ActionCreator.fetchMoviesError());
      });
  },
  fetchPromo: () => (dispatch, _, api) => {
    return api.get(`films/promo`)
      .then(({data}) => {
        const movie = adaptMovie(data);

        dispatch(ActionCreator.fetchPromoSuccess((movie)));
      })
      .catch(() => {
        dispatch(ActionCreator.fetchPromoError());
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
  updateFavoriteStatus: (id, status) => (dispatch, _, api) => {
    dispatch(ActionCreator.updateFavoriteStatusRequest());

    return api.post(`/favorite/${id}/${status}`)
      .then(({data}) => {
        const movie = adaptMovie(data);

        dispatch(ActionCreator.updateFavoriteStatusSuccess(movie));
      })
      .catch(() => {
        dispatch(ActionCreator.updateFavoriteStatusError());
      });
  }
};

export {Operation};
