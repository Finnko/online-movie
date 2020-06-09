import React from 'react';
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";
import MoviePropType from "../../prop-types/movie";

const MoviesList = ({movies}) => {
  const moviesItems = movies.map((item, index) => {
    return (
      <MovieCard
        movie={item}
        key={Math.random() + index}
      />);
  });

  return (
    <div className="catalog__movies-list">
      {moviesItems}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(MoviePropType).isRequired,
};

export default MoviesList;
