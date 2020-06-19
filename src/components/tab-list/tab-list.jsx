import React from 'react';
import PropTypes from 'prop-types';

const TabList = ({activeTab, tabNames, onTabClick}) => {
  return (
    <ul className="movie-nav__list">
      {tabNames.map((name, index) => {
        const isActive = name === activeTab;
        return (
          <li
            className={`movie-nav__item ${isActive ? `movie-nav__item--active` : ``}`}
            key={name + index}
          >
            <a
              href="#"
              className="movie-nav__link"
              onClick={(evt) => {
                evt.preventDefault();
                onTabClick(name);
              }}
            >
              {name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

TabList.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
  tabNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TabList;
