import * as React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {Config, Errors, LoaderSetup, PathName} from '../../const';
import {getMovieById} from '../../store/reducers/movies/selectors';
import {getErrorStatus, getLoadingStatus} from '../../store/reducers/comments/selectors';
import {Operation as CommentOperation} from '../../store/reducers/comments/operations';
import Header from '../../components/header/header';
import RadioButton from '../../components/radio-button/radio-button';
import Loader from '../../components/loader/loader';
import {Movie} from '../../interfaces';

type AddReviewProps = {
  currentMovie: Movie,
  loading: boolean,
  error: boolean,
  movieId: number,
  rating: string,
  review: string,
  isFormValid: boolean,
  onInputChange: () => void,
  onFormSubmit: ({}) => void,
}

class AddReviewPage extends React.PureComponent<AddReviewProps> {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    const {movieId, rating, review} = this.props;

    this.props.onFormSubmit({
      rating: parseInt(rating, 10),
      comment: review,
      id: movieId,
    });
  }

  render() {
    const {
      currentMovie,
      loading,
      error,
      movieId,
      review,
      rating,
      isFormValid,
      onInputChange,
    } = this.props;

    if (!currentMovie) {
      return <Redirect to={PathName.ROOT}/>;
    }

    const {title, poster, backgroundImage} = currentMovie;
    const radioGroupIds = Object.keys(Config.COMMENT_RATING_MAP);

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={title}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header>
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link
                    className="breadcrumbs__link"
                    to={`${PathName.MOVIE_PAGE}${movieId}`}
                  >
                    {title}
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">
                    Add review
                  </a>
                </li>
              </ul>
            </nav>
          </Header>

          <div className="movie-card__poster movie-card__poster--small">
            <img
              src={poster}
              alt={title}
              width="218"
              height="327"
            />
          </div>
        </div>

        <div className="add-review">
          <form
            action="#"
            className="add-review__form"
            onSubmit={this.handleFormSubmit}
          >
            <div className="rating">
              <div className="rating__stars">
                {radioGroupIds.map((id) => (
                  <RadioButton
                    key={id}
                    id={`star-${id}`}
                    groupName="rating"
                    checked={rating === Config.COMMENT_RATING_MAP[id]}
                    value={Config.COMMENT_RATING_MAP[id]}
                    label={`Rating ${Config.COMMENT_RATING_MAP[id]}`}
                    disabled={loading}
                    onRadioChange={onInputChange}
                  />
                ))}
              </div>
            </div>

            <div className="add-review__text">
              <textarea
                className="add-review__textarea"
                name="review"
                id="review"
                placeholder="Review text"
                value={review}
                disabled={loading}
                onChange={onInputChange}
              />

              <div className="add-review__submit">
                {loading &&
                  <Loader
                    style={LoaderSetup.POSITION.ABSOLUTE}
                    size={LoaderSetup.SIZE.SMALL}
                  />
                }

                {!loading && error &&
                  <p>{Errors.FETCHING_DATA}</p>
                }

                {!loading &&
                  <button
                    className="add-review__btn"
                    type="submit"
                    disabled={!isFormValid}
                  >
                    Post
                  </button>
                }
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state, {match}) => {
  const movieId = parseInt(match.params.id, 10);

  return {
    loading: getLoadingStatus(state),
    error: getErrorStatus(state),
    currentMovie: getMovieById(state, movieId),
    movieId,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit(commentData) {
    dispatch(CommentOperation.sendComment(commentData));
  }
});

export {AddReviewPage};
export default connect(mapStateToProps, mapDispatchToProps)(AddReviewPage);
