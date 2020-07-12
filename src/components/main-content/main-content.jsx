import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MoviePropType from '../../prop-types/movie';
import {Config, ViewMode} from '../../const';
import {ActionCreator} from '../../store/actions/action-creator';
import {getActiveGenre, getGenres, getMoviesByGenre, getMoviesRenderLimit} from '../../store/reducers/app/selectors';
import MoviesList from '../movies-list/movies-list.jsx';
import ShowMore from '../show-more/show-more.jsx';
import GenresList from '../genres-list/genres-list.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item';

const GenresListWrapped = withActiveItem(GenresList);

const MainContent = ({
  genres,
  filteredMovies,
  activeGenre,
  renderLimit,
  handleGenreChange,
  handleShowMoreClick
}) => {
  const isShowMoreVisible = renderLimit > filteredMovies.length;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresListWrapped
        activeItem={activeGenre}
        genres={genres}
        onGenreChange={handleGenreChange}
      />

      <MoviesList
        movies={filteredMovies}
        viewMode={ViewMode.MOVIE_CARD.WITH_PLAYER}
      />

      {!isShowMoreVisible &&
        <ShowMore
          offset={Config.MOVIES_NUMBER_OFFSET}
          onButtonClick={handleShowMoreClick}
        />
      }
    </section>
  );
};

MainContent.propTypes = {
  filteredMovies: PropTypes.arrayOf(MoviePropType).isRequired,
  activeGenre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  renderLimit: PropTypes.number,
  handleGenreChange: PropTypes.func.isRequired,
  handleShowMoreClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    filteredMovies: getMoviesByGenre(state),
    activeGenre: getActiveGenre(state),
    genres: getGenres(state),
    renderLimit: getMoviesRenderLimit(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleGenreChange(genre) {
    dispatch(ActionCreator.changeActiveGenre(genre));
    dispatch(ActionCreator.resetMoviesLimit());
  },
  handleShowMoreClick(offset) {
    dispatch(ActionCreator.changeMoviesLimit(offset));
  }
});

export {MainContent};
export default connect(mapStateToProps, mapDispatchToProps)(MainContent);

