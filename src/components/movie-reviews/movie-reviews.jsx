import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ReviewPropType from '../../prop-types/review';
import {
  getLoadingStatus,
  getErrorStatus,
  getComments,
  getOnceLoadedStatus
} from '../../store/reducers/comments/selectors';
import {divideReviewsIntoColumns} from '../../utils/common';
import {Operation as CommentsOperation} from '../../store/reducers/comments/operations';
import {EmptyText, Errors, LoaderSetup} from '../../const';
import MovieReviewsItem from '../movie-reviews-item/movie-reviews-item.tsx';
import Loader from '../loader/loader.tsx';

class MovieReviews extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {movieId, fetchCommentsData} = this.props;
    fetchCommentsData(movieId);
  }

  componentDidUpdate(prevProps) {
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
          <Fragment>
            <div className="movie-card__reviews-col">
              {this.renderReviews(firstColumn)}
            </div>
            <div className="movie-card__reviews-col">
              {secondColumn.length > 0 && this.renderReviews(secondColumn)}
            </div>
          </Fragment>
        }

        {!loading && !error && onceLoaded && reviews.length === 0 &&
          <Fragment>
            <div className="movie-card__reviews-col">
              {EmptyText.COMMENTS}
            </div>
          </Fragment>
        }

        {!loading && error &&
          <Fragment>
            <div className="movie-card__reviews-col">
              {Errors.FETCHING_DATA}
            </div>
          </Fragment>
        }
      </div>
    );
  }
}

MovieReviews.propTypes = {
  movieId: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(ReviewPropType).isRequired,
  fetchCommentsData: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  onceLoaded: PropTypes.bool.isRequired,
};

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
