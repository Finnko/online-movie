import * as React from 'react';
import {connect} from 'react-redux';
import {Operation as MoviesOperation} from '../../store/reducers/movies/operations';
import {getErrorStatus, getLoadingStatus, getFavorites} from '../../store/reducers/movies/selectors';
import {Movie} from '../../interfaces';
import {Errors, LoaderSetup, ViewMode} from '../../const';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import MovieListCardWrapped from '../../components/movie-list-card/movie-list-card';
import Loader from '../../components/loader/loader';

type Props = {
  favorites: Movie[],
  loading: boolean,
  error: boolean,
  fetchFavoriteMovies: () => void,
}

class MyListPage extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
  }

  componentDidMount():void {
    const {fetchFavoriteMovies} = this.props;
    fetchFavoriteMovies();
  }

  render() {
    const {favorites, loading, error} = this.props;

    return (
      <div className="user-page">
        <Header className={`user-page__head`}>
          <h1 className="page-title user-page__title">
            My list
          </h1>
        </Header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          {loading &&
            <Loader
              style={LoaderSetup.POSITION.FIXED}
              size={LoaderSetup.SIZE.MEDIUM}
            />
          }

          {!loading && !error &&
            <div className="catalog__movies-list">
              {favorites.length > 0 && favorites.map((item) => {
                return (
                  <MovieListCardWrapped
                    key={item.id}
                    movie={item}
                    viewMode={ViewMode.MOVIE_CARD.IMAGE}
                  />);
              })}
            </div>
          }

          {!loading && error &&
            <div className="catalog__movies-list">
              {`${Errors.FETCHING_DATA}`}
            </div>
          }
        </section>

        <Footer/>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    loading: getLoadingStatus(state),
    error: getErrorStatus(state),
    favorites: getFavorites(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchFavoriteMovies() {
    dispatch(MoviesOperation.fetchFavoriteMovies());
  }
});

export {MyListPage};
export default connect(mapStateToProps, mapDispatchToProps)(MyListPage);
