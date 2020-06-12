const OFFER_MAX_RATING = 10;

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getRandomInRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArrayNumber = (array) => Math.floor(Math.random() * array.length);

const getRandomArray = (array) => {
  const randomNumber = getRandomArrayNumber(array);

  return randomNumber > 0 ? array.slice(0, randomNumber) : array.slice(0, randomNumber + 1);
};

const getRandomRating = () => parseFloat((Math.random() * OFFER_MAX_RATING).toFixed(1));
const getRatingPercentage = (rating) => rating * 100 / OFFER_MAX_RATING;

const getMovieById = (movies, id) => movies.find((movie) => movie.id === id);

export {
  getRandomArrayNumber,
  getRandomArray,
  getRandomRating,
  getRatingPercentage,
  getRandomInRange,
  getMovieById,
  extend
};
