import * as React from 'react';
import classNames from 'classnames';

type Props = {
  genres: string[];
  activeItem: string;
  onGenreChange: (genre: string) => void;
  onActiveItemChange: (genre: string) => void;
}

const GenresList: React.FC<Props> = (props: Props) => {
  const {
    genres,
    onGenreChange,
    activeItem,
    onActiveItemChange
  } = props;

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => {
        const tabClass = classNames({
          'catalog__genres-item': true,
          'catalog__genres-item--active': genre === activeItem,
        });

        return (
          <li
            className={tabClass}
            key={genre}
          >
            <a
              href="#"
              className="catalog__genres-link"
              onClick={(evt) => {
                evt.preventDefault();
                onActiveItemChange(genre);
                onGenreChange(genre);
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

export default GenresList;
