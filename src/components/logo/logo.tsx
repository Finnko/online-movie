import * as React from 'react';
import {Link} from 'react-router-dom';
import {PathName} from '../../const';

const Logo:React.FC = () => {
  return (
    <div className="logo">
      <Link
        className="logo__link"
        to={`${PathName.ROOT}`}
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};

export default Logo;
