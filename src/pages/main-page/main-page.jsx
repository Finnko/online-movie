import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MoviePropType from '../../prop-types/movie';
import {ViewMode, LoaderSetup, AuthStatus} from '../../const';
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
import {getAuthStatus} from '../../store/reducers/user/selectors';


const MainPage = ({
  promo,
  loading,
  error,
  errorText,
  favoriteLoading,
  favoriteError,
  authStatus,
  updateFavoriteStatus,
}) => {
  const isAuth = AuthStatus.AUTH === authStatus;

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
              isAuth={isAuth}
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
  authStatus: PropTypes.string.isRequired,
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
    authStatus: getAuthStatus(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateFavoriteStatus(id, status) {
    dispatch(MoviesOperation.updateFavoriteStatus(id, status));
  }
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
