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

const getLevelFromRating = (rating, levelMap) => {
  const levels = Object.keys(levelMap).reverse();

  for (const level of levels) {
    if (rating >= parseInt(level, 10)) {
      return levelMap[level];
    }
  }

  return ``;
};

const getFormattedMovieTime = (time) => `${Math.floor(time / 60)}h ${time % 60}`;

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
  extend
};
