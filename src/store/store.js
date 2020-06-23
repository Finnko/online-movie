import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducers/root-reducer';
import {ActionCreator} from './actions/action-creator';
import {movieMocks, promoMovieMock} from '../mocks/movies';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(ActionCreator.fetchMoviesDataRequest());
const promiseDelay = (arg) => new Promise((resolve, reject) => {
  return Math.random() > 0.95 ? setTimeout(resolve, arg) : reject(`error`);
});

promiseDelay(500)
  .then(() => store.dispatch(ActionCreator.fetchMoviesDataSuccess(movieMocks, promoMovieMock)))
  .catch(() => store.dispatch(ActionCreator.fetchMoviesDataError()));


export {store};
