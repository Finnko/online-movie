import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createAPI} from '../api/api';
import rootReducer from './reducers/root-reducer';
import {ActionCreator} from './actions/action-creator';
import {AuthStatus, Errors} from '../const';

const handlers = {
  handleUnauthorized: () => {
    store.dispatch(ActionCreator.setAuth(AuthStatus.NO_AUTH));
  },
  handleNoResponse: () => store.dispatch(ActionCreator.setError(Errors.NO_RESPONSE)),
  handleNotFound: () => store.dispatch(ActionCreator.setError(Errors.FETCHING_DATA)),
  handleBadRequest: () => store.dispatch(ActionCreator.setError(Errors.BAD_REQUEST)),
};

const api = createAPI(handlers);

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

export {store};
