import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MoviePropType from '../../prop-types/movie';
import MovieListCard from '../movie-list-card/movie-list-card.jsx';

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovieId: null,
    };

    this.timer = null;
    this.movieMouseLeaveHandler = this.movieMouseLeaveHandler.bind(this);
    this.movieMouseEnterHandler = this.movieMouseEnterHandler.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    this.setState({activeMovieId: null});
  }

  movieMouseEnterHandler(movieId) {
    this.timer = setTimeout(() => {
      this.setState({
        activeMovieId: movieId
      });
    }, 1000);
  }
  movieMouseLeaveHandler() {
    clearTimeout(this.timer);
    this.setState({activeMovieId: null});
  }

  render() {
    const {movies} = this.props;
    const movieItems = movies.map((item) => {
      return (
        <MovieListCard
          key={item.id}
          movie={item}
          activeItemId={this.state.activeMovieId}
          onMovieMouseEnter={this.movieMouseEnterHandler}
          onMovieMouseLeave={this.movieMouseLeaveHandler}
        />);
    });

    return (
      <div className="catalog__movies-list">
        {movieItems}
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(MoviePropType).isRequired,
};

export default MoviesList;
