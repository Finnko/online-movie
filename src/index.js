import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const promoMovie = {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    year: 2014,
};

const movies = [
    {title: `Fantastic Beasts: The Crimes of Grindelwald`},
    {title: `Bohemian Rhapsody`},
    {title: `Macbeth`},
    {title: `Aviator`},
    {title: `We need to talk about Kevin`},
    {title: `What We Do in the Shadows`},
    {title: `Revenant`},
    {title: `Johnny English`},
    {title: `Shutter Island`},
];

ReactDOM.render(
  <App
    promo={promoMovie}
    movies={movies}
  />,
  document.querySelector(`#root`)
);
