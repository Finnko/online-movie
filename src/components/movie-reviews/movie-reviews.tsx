import * as React from 'react';
import {connect} from 'react-redux';
import {Review} from '../../interfaces';
import {
  getLoadingStatus,
  getErrorStatus,
  getComments,
  getOnceLoadedStatus
} from '../../store/reducers/comments/selectors';
import {divideReviewsIntoColumns} from '../../utils/common';
import {Operation as CommentsOperation} from '../../store/reducers/comments/operations';
import {EmptyText, Errors, LoaderSetup} from '../../const';
import MovieReviewsItem from '../movie-reviews-item/movie-reviews-item';
import Loader from '../loader/loader';

type MovieReviewProps = {
  movieId: number;
  reviews: Review[];
  fetchCommentsData: (id: number) => void;
  loading: boolean;
  error: boolean;
  onceLoaded: boolean;
}

class MovieReviews extends React.PureComponent<MovieReviewProps> {
  constructor(props) {
    super(props);
  }

  componentDidMount(): void {
    const {movieId, fetchCommentsData} = this.props;
    fetchCommentsData(movieId);
  }

  componentDidUpdate(prevProps): void {
    const {movieId} = prevProps;
    const {movieId: newId, fetchCommentsData} = this.props;

    if (newId !== movieId) {
      fetchCommentsData(newId);
    }
  }

  renderReviews(reviewsList) {
    return reviewsList.map((review) =>
      <MovieReviewsItem key={review.id} review={review}/>);
  }

  render() {
    const {reviews, loading, error, onceLoaded} = this.props;

    const result = divideReviewsIntoColumns(reviews);
    const {firstColumn, secondColumn} = result;

    return (
      <div className="movie-card__reviews movie-card__row">
        {loading &&
          <Loader
            style={LoaderSetup.POSITION.ABSOLUTE}
            size={LoaderSetup.SIZE.MEDIUM}
          />
        }

        {!loading && !error && reviews.length > 0 &&
          <React.Fragment>
            <div className="movie-card__reviews-col">
              {this.renderReviews(firstColumn)}
            </div>
            <div className="movie-card__reviews-col">
              {secondColumn.length > 0 && this.renderReviews(secondColumn)}
            </div>
          </React.Fragment>
        }

        {!loading && !error && onceLoaded && reviews.length === 0 &&
          <React.Fragment>
            <div className="movie-card__reviews-col">
              {EmptyText.COMMENTS}
            </div>
          </React.Fragment>
        }

        {!loading && error &&
          <React.Fragment>
            <div className="movie-card__reviews-col">
              {Errors.FETCHING_DATA}
            </div>
          </React.Fragment>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: getLoadingStatus(state),
    error: getErrorStatus(state),
    reviews: getComments(state),
    onceLoaded: getOnceLoadedStatus(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchCommentsData(id) {
    dispatch(CommentsOperation.fetchComments(id));
  }
});


export {MovieReviews};
export default connect(mapStateToProps, mapDispatchToProps)(MovieReviews);
