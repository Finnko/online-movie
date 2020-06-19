import PropTypes from "prop-types";

const ReviewPropType = PropTypes.shape({
  id: PropTypes.string,
  user: PropTypes.string,
  comment: PropTypes.string,
  date: PropTypes.object,
});

export default ReviewPropType;
