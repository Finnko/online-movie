import moment from 'moment';
import {Config} from '../const';

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getRandomInRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomDate = () => {
  const targetDate = new Date();
  const diffValue = getRandomInRange(0, 270) * -1;

  targetDate.setDate(targetDate.getDate() + diffValue);

  return targetDate;
};

const getRandomArrayNumber = (array) => Math.floor(Math.random() * array.length);

const getRandomLengthArray = (array) => {
  const randomNumber = getRandomArrayNumber(array);

  return randomNumber > 0 ? array.slice(0, randomNumber) : array.slice(0, randomNumber + 1);
};

const getRandomRating = () => parseFloat((Math.random() * Config.MOVIE_MAX_RATING).toFixed(1));

const getMovieById = (movies, id) => movies.find((movie) => movie.id === id);

const getSimilarMovies = (movies, id, genre) => {
  return movies.filter((movie) => movie.genre === genre && movie.id !== id);
};

const getMovieGenres = (movies) => {
  const temp = [Config.DEFAULT_FILTER, ...movies.map((movie) => movie.genre)];

  return Array.from(new Set(temp));
};

const getLevelFromRating = (rating, levelMap) => {
  const levels = Object.keys(levelMap).reverse();

  for (const level of levels) {
    if (rating >= parseInt(level, 10)) {
      return levelMap[level];
    }
  }

  return ``;
};

const renameKeys = (obj) => {
  for (const key in obj) {
    if ({}.hasOwnProperty.call(obj, key)) {
      if (typeof obj[key] === `object`) {
        renameKeys(obj[key]);
      }

      if (key.includes(`_`)) {
        const [firstWord, secondWord] = key.split(`_`);
        const newKey = firstWord + secondWord.charAt(0).toUpperCase() + secondWord.slice(1);

        obj[newKey] = obj[key];
        delete obj[key];
      }
    }
  }

  return obj;
};

const divideReviewsIntoColumns = (arr) => {
  const middle = Math.ceil(arr.length / 2);
  const firstColumn = arr.slice(0, middle);
  const secondColumn = arr.slice(middle);

  return {firstColumn, secondColumn};
};

const getFormattedMovieTime = (time) => `${Math.floor(time / 60)}h ${time % 60}m`;

const getFormattedDate = (date) => moment(date).format(`MMMM DD, YYYY`);
const getFormattedTagDate = (date) => moment(date).format(`YYYY-MM-DD`);

export {
  getRandomArrayNumber,
  getRandomLengthArray,
  getRandomRating,
  getRandomInRange,
  getMovieById,
  getLevelFromRating,
  getRandomDate,
  getFormattedDate,
  getFormattedMovieTime,
  getFormattedTagDate,
  getSimilarMovies,
  getMovieGenres,
  divideReviewsIntoColumns,
  renameKeys,
  extend
};
