import PropTypes from "prop-types";

const MoviePropType = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  preview: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundColor: PropTypes.string,
  videoSrc: PropTypes.string,
  genre: PropTypes.string,
  releaseYear: PropTypes.number,
  description: PropTypes.string,
  director: PropTypes.string,
  actors: PropTypes.arrayOf(PropTypes.string),
  rating: PropTypes.number,
  ratingCount: PropTypes.number,
  runTime: PropTypes.number,
  isFavorite: PropTypes.bool,
});

export default MoviePropType;
