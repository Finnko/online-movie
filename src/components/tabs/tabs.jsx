import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {TabName} from '../../const';
import MoviePropType from '../../prop-types/movie';
import ReviewPropType from '../../prop-types/review';
import MovieOverview from '../movie-overview/movie-overview.jsx';
import MovieDetails from '../movie-details/movie-details.jsx';
import MovieReviews from '../movie-reviews/movie-reviews.jsx';

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {selectedTab: TabName.OVERVIEW};
    this.getActiveClass = this.getActiveClass.bind(this);
  }

  getActiveClass(tabName) {
    return this.state.selectedTab === tabName ? `movie-nav__item--active` : ``;
  }

  render() {
    const {movie} = this.props;
    const {reviews} = movie;

    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            <li className="movie-nav__item movie-nav__item--active">
              <a href="#" className="movie-nav__link">Overview</a>
            </li>
            <li className="movie-nav__item">
              <a href="#" className="movie-nav__link">Details</a>
            </li>
            <li className="movie-nav__item">
              <a href="#" className="movie-nav__link">Reviews</a>
            </li>
          </ul>
        </nav>

        <MovieOverview
          movie={movie}
        />

        <MovieDetails
          movie={movie}
        />

        <MovieReviews
          reviews={reviews}
        />
      </div>
    );
  }
}

Tabs.propTypes = {
  movie: MoviePropType.isRequired,
};

export default Tabs;
