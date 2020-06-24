import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({size}) => {
  return (
    <div className="loader-wrapper">
      <div className={`loader ${size}`}/>
    </div>
  );
};

Loader.propTypes = {
  size: PropTypes.string.isRequired,
};

export default Loader;
