import {Config} from '../const';

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getRandomInRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArrayNumber = (array) => Math.floor(Math.random() * array.length);

const getRandomLengthArray = (array) => {
  const randomNumber = getRandomArrayNumber(array);

  return randomNumber > 0 ? array.slice(0, randomNumber) : array.slice(0, randomNumber + 1);
};

const getRandomRating = () => parseFloat((Math.random() * Config.MOVIE_MAX_RATING).toFixed(1));

const getMovieById = (movies, id) => movies.find((movie) => movie.id === id);

const getLevelFromRating = (rating, levelMap) => {
  const levels = Object.keys(levelMap).reverse();

  for (const level of levels) {
    if (rating >= parseInt(level, 10)) {
      return levelMap[level];
    }
  }

  return ``;
};

export {
  getRandomArrayNumber,
  getRandomLengthArray,
  getRandomRating,
  getRandomInRange,
  getMovieById,
  getLevelFromRating,
  extend
};
