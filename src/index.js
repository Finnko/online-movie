import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {movieMocks, promoMovieMock} from './mocks/movies';

ReactDOM.render(
    <App
      promo={promoMovieMock}
      movies={movieMocks}
    />, document.querySelector(`#root`)
);
