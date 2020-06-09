import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {moviesMocks, promoMovieMock} from "./mocks/movies";

ReactDOM.render(
    <App
      promo={promoMovieMock}
      movies={moviesMocks}
    />, document.querySelector(`#root`)
);
