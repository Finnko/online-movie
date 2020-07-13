import {ActionCreator} from '../../actions/action-creator';
import {adaptMovies, adaptMovie} from '../../../utils/adapter';

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
};

export {Operation};
