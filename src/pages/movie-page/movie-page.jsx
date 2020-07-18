import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getMovieById, getSimilarMovies} from '../../utils/common';
import {Config, PathName, TabName, ViewMode} from '../../const';
import MoviePropType from '../../prop-types/movie';
import {
  getFavoriteError,
  getFavoriteLoading,
  getMovies
} from '../../store/reducers/movies/selectors';
import MovieBanner from '../../components/movie-banner/movie-banner.jsx';
import MoviesList from '../../components/movies-list/movies-list.jsx';
import Tabs from '../../components/tabs/tabs.jsx';
import Footer from '../../components/footer/footer.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import {getAuthStatus} from '../../store/reducers/user/selectors';
import {Operation as MoviesOperation} from '../../store/reducers/movies/operations';

const TabsWrapped = withActiveItem(Tabs);


const MoviePage = ({
  currentMovie,
  movies,
  favoriteError,
  favoriteLoading,
  updateFavoriteStatus,
}) => {
  if (!currentMovie) {
    return <Redirect to={PathName.ROOT}/>;
  }

  const similarMovies = getSimilarMovies(movies, currentMovie.id, currentMovie.genre).slice(0, Config.SIMILAR_MOVIES_TO_SHOW);
  const {poster, title, backgroundColor} = currentMovie;

  return (
    <Fragment>
      <section className="movie-card movie-card--full" style={{backgroundColor}}>
        <div className="movie-card__hero">
          <MovieBanner
            movie={currentMovie}
            viewMode={ViewMode.PROMO.DETAILS}
            loading={favoriteLoading}
            error={favoriteError}
            updateFavoriteStatus={updateFavoriteStatus}
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

          {similarMovies.length > 0 && <MoviesList movies={similarMovies} viewMode={ViewMode.MOVIE_CARD.IMAGE}/>}
        </section>

        <Footer/>
      </div>
    </Fragment>
  );
};

MoviePage.propTypes = {
  currentMovie: MoviePropType.isRequired,
  favoriteLoading: PropTypes.bool.isRequired,
  favoriteError: PropTypes.bool.isRequired,
  movies: PropTypes.arrayOf(MoviePropType).isRequired,
  updateFavoriteStatus: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const {match} = ownProps;
  const movieId = parseInt(match.params.id, 10);

  return {
    favoriteLoading: getFavoriteLoading(state),
    favoriteError: getFavoriteError(state),
    movies: getMovies(state),
    currentMovie: getMovieById(getMovies(state), movieId),
    authStatus: getAuthStatus(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateFavoriteStatus(id, status) {
    dispatch(MoviesOperation.updateFavoriteStatus(id, status));
  }
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
