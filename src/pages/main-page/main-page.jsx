import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MoviePropType from '../../prop-types/movie';
import {ViewMode, LoaderSetup} from '../../const';
import {
  getErrorStatus,
  getErrorText,
  getFavoriteError,
  getFavoriteLoading,
  getLoadingStatus,
  getPromo
} from '../../store/reducers/movies/selectors';
import {Operation as MoviesOperation} from '../../store/reducers/movies/operations';
import Footer from '../../components/footer/footer.jsx';
import MovieBanner from '../../components/movie-banner/movie-banner.jsx';
import Loader from '../../components/loader/loader.jsx';
import Error from '../../components/error/error.jsx';
import MainContent from '../../components/main-content/main-content.jsx';


const MainPage = ({
  promo,
  loading,
  error,
  errorText,
  favoriteLoading,
  favoriteError,
  updateFavoriteStatus,
}) => {
  return (
    <Fragment>
      {loading &&
        <Loader
          size={LoaderSetup.SIZE.MEDIUM}
          position={LoaderSetup.POSITION.FIXED}
        />
      }

      {!loading && !error &&
        <Fragment>
          <section className="movie-card">
            <MovieBanner
              movie={promo}
              viewMode={ViewMode.PROMO.MAIN}
              loading={favoriteLoading}
              error={favoriteError}
              updateFavoriteStatus={updateFavoriteStatus}
            />
          </section>

          <div className="page-content">
            <MainContent />

            <Footer/>
          </div>
        </Fragment>
      }

      {!loading && error && <Error error={errorText}/>}
    </Fragment>
  );
};

MainPage.propTypes = {
  promo: MoviePropType,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  favoriteLoading: PropTypes.bool.isRequired,
  favoriteError: PropTypes.bool.isRequired,
  errorText: PropTypes.string.isRequired,
  updateFavoriteStatus: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    loading: getLoadingStatus(state),
    error: getErrorStatus(state),
    errorText: getErrorText(state),
    promo: getPromo(state),
    favoriteLoading: getFavoriteLoading(state),
    favoriteError: getFavoriteError(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateFavoriteStatus(id, status) {
    dispatch(MoviesOperation.updateFavoriteStatus(id, status));
  }
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
