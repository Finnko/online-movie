import PropTypes from "prop-types";

const MoviePropType = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  thumb: PropTypes.string,
  genre: PropTypes.string,
  year: PropTypes.number,
  description: PropTypes.arrayOf(PropTypes.string),
  director: PropTypes.string,
  actors: PropTypes.arrayOf(PropTypes.string),
  rating: PropTypes.number,
  ratingCount: PropTypes.number,
});

export default MoviePropType;
