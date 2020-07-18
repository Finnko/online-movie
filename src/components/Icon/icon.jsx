import React from 'react';
import PropTypes from 'prop-types';


const Icon = ({name, width, height}) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <use xlinkHref={`#${name}`}/>
    </svg>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default Icon;
