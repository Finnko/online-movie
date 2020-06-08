import React from 'react';

const MovieCard = ({movie}) => {
    const {title} = movie;

    return (
      <article className="small-movie-card catalog__movies-card">
          <div className="small-movie-card__image">
              <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt={`${title}`} width="280" height="175"/>
          </div>
          <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">
                  {title}
              </a>
          </h3>
      </article>
    );
};

export default MovieCard;
