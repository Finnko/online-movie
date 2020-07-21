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

const formatSecondsToTime = (duration) => {
  const time = parseInt(duration, 10);
  const hours = Math.floor(time / 3600).toString().padStart(2, `0`);
  const minutes = Math.floor((time - (hours * 3600)) / 60).toString().padStart(2, `0`);
  const seconds = time - (hours * 3600) - (minutes * 60).toString().padStart(2, `0`);

  return `${hours}:${minutes}:${seconds}`;
};

const getFormattedMovieTime = (time) => `${Math.floor(time / 60)}h ${time % 60}m`;

const getFormattedDate = (date) => moment(date).format(`MMMM DD, YYYY`);
const getFormattedTagDate = (date) => moment(date).format(`YYYY-MM-DD`);

export {
  getRandomArrayNumber,
  getRandomLengthArray,
  getRandomRating,
  getRandomInRange,
  getLevelFromRating,
  getRandomDate,
  getFormattedDate,
  getFormattedMovieTime,
  getFormattedTagDate,
  getMovieGenres,
  divideReviewsIntoColumns,
  formatSecondsToTime,
  renameKeys,
  extend
};
