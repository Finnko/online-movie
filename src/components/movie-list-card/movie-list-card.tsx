import * as React from 'react';
import {Link} from 'react-router-dom';
import {PathName, ViewMode} from '../../const';
import withPreview from '../../hocs/with-preview/with-preview';
import VideoPlayer from '../video-player/video-player';
import {Movie} from "../../interfaces";

type Props = {
  onMovieMouseEnter: () => void;
  onMovieMouseLeave: () => void;
  movie: Movie;
  viewMode: string;
  isPlaying: boolean;
}

const MovieListCard: React.FC<Props> = (props: Props) => {
  const {
    movie,
    viewMode,
    isPlaying,
    onMovieMouseEnter,
    onMovieMouseLeave
  } = props;

  const {id, title, thumb, preview} = movie;
  const isWithPlayer = viewMode === ViewMode.MOVIE_CARD.WITH_PLAYER;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={onMovieMouseEnter}
      onMouseLeave={onMovieMouseLeave}
    >
      <Link
        className="small-movie-card__link"
        to={`${PathName.MOVIE_PAGE}${id}`}
      >
        <div className="small-movie-card__image">
          {isWithPlayer
            ? (
              <VideoPlayer
                muted
                videoSrc={preview}
                poster={thumb}
                isPlaying={isPlaying}
              />)
            : <img src={thumb} alt={title} width="280" height="175"/>
          }
        </div>
      </Link>

      <h3 className="small-movie-card__title">
        <Link
          className="small-movie-card__link"
          to={`${PathName.MOVIE_PAGE}${id}`}
        >
          {title}
        </Link>
      </h3>
    </article>
  );
};

const MovieListCardWrapped = withPreview(React.memo(MovieListCard));

export {MovieListCard};
export default MovieListCardWrapped;
