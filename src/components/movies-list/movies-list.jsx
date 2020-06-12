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

    this.movieMouseLeaveHandler = this.movieMouseLeaveHandler.bind(this);
    this.movieMouseOverHandler = this.movieMouseOverHandler.bind(this);
  }

  movieMouseOverHandler(movieId) {
    this.setState({activeMovieId: movieId});
  }

  movieMouseLeaveHandler() {
    this.setState({activeMovieId: null});
  }

  render() {
    const {movies} = this.props;
    const movieItems = movies.map((item) => {
      return (
        <MovieListCard
          key={item.id}
          movie={item}
          onMovieMouseOver={this.movieMouseOverHandler}
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
