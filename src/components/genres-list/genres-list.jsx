import React from 'react';
import PropTypes from 'prop-types';

const GenresList = ({genres, /* from hoc */ activeItem, onActiveItemChange}) => {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) => {
        const isActive = genre === activeItem;

        return (
          <li
            className={`catalog__genres-item ${isActive ? `catalog__genres-item--active` : ``}`}
            key={genre + index}
          >
            <a
              href="#"
              className="catalog__genres-link"
              onClick={(evt) => {
                evt.preventDefault();
                onActiveItemChange(genre);
              }}
            >
              {genre}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeItem: PropTypes.string.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
};

export default GenresList;
