import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app/app.jsx';
import {movieMocks, promoMovieMock} from './mocks/movies';
import {store} from './store/store';

ReactDOM.render(
    <Provider store={store}>
      <App
        promo={promoMovieMock}
        movies={movieMocks}
      />
    </Provider>, document.querySelector(`#root`)
);
