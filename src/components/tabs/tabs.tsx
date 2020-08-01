import * as React from 'react';
import {Movie} from '../../interfaces';
import {TabName} from '../../const';
import TabList from '../tab-list/tab-list';
import MovieOverview from '../movie-overview/movie-overview';
import MovieDetails from '../movie-details/movie-details';
import MovieReviews from '../movie-reviews/movie-reviews';

type Props = {
  movie: Movie,
  activeItem: string,
  onActiveItemChange: () => void,
}

const Tabs:React.FC<Props> = ({
  movie,
  activeItem,
  onActiveItemChange
}) => {
  const {
    id,
    actors,
    releaseYear,
    director,
    genre,
    runTime,
    rating,
    ratingCount,
    description
  } = movie;
  const tabNames = Object.values(TabName);

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <TabList activeTab={activeItem} tabNames={tabNames} onTabClick={onActiveItemChange}/>
      </nav>

      {
        activeItem === TabName.OVERVIEW &&
        <MovieOverview
          actors={actors}
          director={director}
          rating={rating}
          ratingCount={ratingCount}
          description={description}
        />
      }

      {
        activeItem === TabName.DETAILS &&
        <MovieDetails
          actors={actors}
          director={director}
          genre={genre}
          releaseYear={releaseYear}
          runTime={runTime}
        />
      }

      {activeItem === TabName.REVIEWS && <MovieReviews movieId={id} />}
    </div>
  );
};

export default Tabs;
