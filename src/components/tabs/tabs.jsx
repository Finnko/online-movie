import React from 'react';
import PropTypes from "prop-types";
import {TabName} from '../../const';
import MoviePropType from '../../prop-types/movie';
import TabList from '../tab-list/tab-list.jsx';
import MovieOverview from '../movie-overview/movie-overview.jsx';
import MovieDetails from '../movie-details/movie-details.jsx';
import MovieReviews from '../movie-reviews/movie-reviews.jsx';

const Tabs = ({movie, /* from hoc */ activeItem, onActiveItemChange}) => {
  const {reviews, actors, releaseYear, director, genre, runTime, rating, ratingCount, description} = movie;
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

      {activeItem === TabName.REVIEWS && <MovieReviews reviews={reviews}/>}
    </div>
  );
};

Tabs.propTypes = {
  movie: MoviePropType.isRequired,
  activeItem: PropTypes.string.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
};

export default Tabs;
