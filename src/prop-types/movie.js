import PropTypes from "prop-types";
import ReviewPropType from './review';

const MoviePropType = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  preview: PropTypes.string,
  backgroungImage: PropTypes.string,
  videoSrc: PropTypes.string,
  genre: PropTypes.string,
  releaseYear: PropTypes.number,
  description: PropTypes.arrayOf(PropTypes.string),
  director: PropTypes.string,
  actors: PropTypes.arrayOf(PropTypes.string),
  rating: PropTypes.number,
  ratingCount: PropTypes.number,
  runTime: PropTypes.number,
  reviews: PropTypes.arrayOf(ReviewPropType).isRequired,
});

export default MoviePropType;
