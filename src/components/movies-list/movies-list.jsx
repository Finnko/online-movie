import React from 'react';
import MovieCard from "../movie-card/movie-card.jsx";

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

export default MoviesList;
