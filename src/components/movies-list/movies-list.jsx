import React from 'react';
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";
import MoviePropType from "../../prop-types/movie";

const MoviesList = ({movies}) => {
  const moviesItems = movies.map((item) => {
    return (
      <MovieCard
        movie={item}
        key={item.id}
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
