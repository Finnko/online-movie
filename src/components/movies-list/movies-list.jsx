import React from 'react';
import PropTypes from 'prop-types';
import MoviePropType from '../../prop-types/movie';
import MovieListCardWrapped from '../movie-list-card/movie-list-card.jsx';

const MoviesList = ({movies, viewMode}) => {
  return (
    <div className="catalog__movies-list">
      {movies.map((item) => {
        return (
          <MovieListCardWrapped
            key={item.id}
            movie={item}
            viewMode={viewMode}
          />);
      })}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(MoviePropType).isRequired,
  activeId: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
  viewMode: PropTypes.string.isRequired,
};

export default MoviesList;
