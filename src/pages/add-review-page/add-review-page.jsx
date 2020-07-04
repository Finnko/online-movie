import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Redirect, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Config, PathName} from '../../const';
import {getMovieById} from '../../utils/common';
import MoviePropType from '../../prop-types/movie';
import NameSpace from '../../store/name-space';
import Header from '../../components/header/header.jsx';
import RadioButton from '../../components/radio-button/radio-button.jsx';
import Loader from '../../components/loader/loader.jsx';

const AddReviewPage = ({movies, match}) => {
  const [radioValue, setRadioValue] = useState(3);
  const [comment, setComment] = useState(``);

  const movieId = match.params.id;
  const currentMovie = getMovieById(movies, movieId);

  if (!currentMovie) {
    return <Redirect to={PathName.ROOT}/>;
  }

  const handleRadioChange = (evt) => {
    const {value} = evt.target;
    setRadioValue(parseInt(value, 10));
  };

  const handleCommentChange = (evt) => {
    const {value} = evt.target;
    setComment(value);
  };

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
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              {radioGroupIds.map((id) => (
                <RadioButton
                  key={id}
                  id={`star-${id}`}
                  groupName="rating"
                  checked={radioValue === Config.COMMENT_RATING_MAP[id]}
                  value={Config.COMMENT_RATING_MAP[id]}
                  label={`Rating ${Config.COMMENT_RATING_MAP[id]}`}
                  onRadioChange={handleRadioChange}
                />
              ))}
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              value={comment}
              onChange={handleCommentChange}
            />

            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                disabled={comment.length < Config.COMMENT_LENGTH.MIN || comment.length > Config.COMMENT_LENGTH.MAX}
              >
                Post
              </button>
            </div>

          </div>
        </form>
      </div>
    </section>
  );
};

AddReviewPage.propTypes = {
  movies: PropTypes.arrayOf(MoviePropType).isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    movies: state[NameSpace.DATA].movies,
  };
};

// const mapDispatchToProps = (state) => {
// };

export {AddReviewPage};
export default connect(mapStateToProps)(AddReviewPage);
