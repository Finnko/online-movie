import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import MoviePropType from "../../prop-types/movie";

const App = ({promo, movies}) => {
  return (
    <Main
      promo={promo}
      movies={movies}
    />
  );
};

App.propTypes = {
  promo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
  movies: PropTypes.arrayOf(MoviePropType).isRequired,
};

export default App;
