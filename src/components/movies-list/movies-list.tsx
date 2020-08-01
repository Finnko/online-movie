import * as React from 'react';
import {Movie} from "../../interfaces";
import MovieListCardWrapped from '../movie-list-card/movie-list-card';

type Props = {
  movies: Movie[],
  viewMode: string,
}

const MoviesList:React.FC<Props> = ({movies, viewMode}) => {
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

export default MoviesList;
