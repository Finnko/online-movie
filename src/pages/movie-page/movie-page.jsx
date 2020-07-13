import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getMovieById, getSimilarMovies} from '../../utils/common';
import {Config, PathName, TabName, ViewMode} from '../../const';
import MoviePropType from '../../prop-types/movie';
import {getErrorStatus, getLoadingStatus} from '../../store/reducers/comments/selectors';
import {getMovies} from '../../store/reducers/data/selectors';
import MovieBanner from '../../components/movie-banner/movie-banner.jsx';
import MoviesList from '../../components/movies-list/movies-list.jsx';
import Tabs from '../../components/tabs/tabs.jsx';
import Footer from '../../components/footer/footer.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item';

const TabsWrapped = withActiveItem(Tabs);


const MoviePage = ({
  currentMovie,
  movies,
  movieId
}) => {
  if (!currentMovie) {
    return <Redirect to={PathName.ROOT}/>;
  }

  const similarMovies = getSimilarMovies(movies, currentMovie.id, currentMovie.genre).slice(0, Config.SIMILAR_MOVIES_TO_SHOW);
  const {
    title,
    genre,
    releaseYear,
    poster,
    backgroundColor,
    backgroundImage
  } = currentMovie;

  return (
    <Fragment>
      <section className="movie-card movie-card--full" style={{backgroundColor}}>
        <div className="movie-card__hero">
          <MovieBanner
            id={movieId}
            title={title}
            genre={genre}
            poster={poster}
            releaseYear={releaseYear}
            backgroundImage={backgroundImage}
            viewMode={ViewMode.PROMO.DETAILS}
          />
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster} alt={`${title} poster`} width="218" height="327"/>
            </div>

            <TabsWrapped activeItem={TabName.OVERVIEW} movie={currentMovie}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          {similarMovies.length && <MoviesList movies={similarMovies} viewMode={ViewMode.MOVIE_CARD.IMAGE}/>}
        </section>

        <Footer/>
      </div>
    </Fragment>
  );
};

MoviePage.propTypes = {
  currentMovie: MoviePropType.isRequired,
  movies: PropTypes.arrayOf(MoviePropType).isRequired,
  movieId: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const {match} = ownProps;
  const movieId = parseInt(match.params.id, 10);

  return {
    loading: getLoadingStatus(state),
    error: getErrorStatus(state),
    movies: getMovies(state),
    currentMovie: getMovieById(getMovies(state), movieId),
    movieId,
  };
};

export {MoviePage};
export default connect(mapStateToProps)(MoviePage);
