import React from 'react';
import PropTypes from 'prop-types';

const ShowMore = ({offset, onButtonClick}) => {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => onButtonClick(offset)}
      >
        Show more
      </button>
    </div>
  );
};

ShowMore.propTypes = {
  offset: PropTypes.number.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default ShowMore;
