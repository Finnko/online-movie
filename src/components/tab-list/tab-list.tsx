import * as React from 'react';

type Props = {
  activeTab: string;
  onTabClick: (name: string) => void;
  tabNames: string[];
}

const TabList: React.FC<Props> = (props: Props) => {
  const {activeTab, tabNames, onTabClick} = props;

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

export default TabList;
