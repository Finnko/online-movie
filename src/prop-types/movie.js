import PropTypes from "prop-types";

const MoviePropType = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  thumb: PropTypes.string,
});

export default MoviePropType;
