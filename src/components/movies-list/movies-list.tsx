import * as React from 'react';
import {Movie} from "../../interfaces";
import MovieListCardWrapped from '../movie-list-card/movie-list-card';

type Props = {
  movies: Movie[];
  viewMode: string;
}

const MoviesList: React.FC<Props> = (props: Props) => {
  const {movies, viewMode} = props;

  return (
    <div className="catalog__movies-list">
      {movies.map((item) => {
        return (
          <MovieListCardWrapped
            key={item.id}
            id={item.id}
            title={item.title}
            thumb={item.thumb}
            preview={item.preview}
            viewMode={viewMode}
          />);
      })}
    </div>
  );
};

export default React.memo(MoviesList);
