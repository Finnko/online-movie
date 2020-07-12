import PropTypes from "prop-types";

const UserPropType = PropTypes.shape({
  id: 1,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
});

export default UserPropType;
