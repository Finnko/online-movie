import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({size, position}) => {
  return (
    <div className="loader-wrapper" style={{position}}>
      <div className={`loader ${size}`}/>
    </div>
  );
};

Loader.propTypes = {
  size: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default Loader;
