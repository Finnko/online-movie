import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {Operation as MoviesOperation} from './store/reducers/movies/operations';
import {Operation as UserOperation} from './store/reducers/user/operations';
import App from './components/app/app.tsx';

store.dispatch(MoviesOperation.fetchPromo());
store.dispatch(MoviesOperation.fetchMovies());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.querySelector(`#root`)
);
