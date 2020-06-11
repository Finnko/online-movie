import nanoid from 'nanoid';
import {getRandomArray, getRandomArrayNumber, getRandomInRange, getRandomRating} from '../utils/common';

const ID_PREFIX = `id_`;
const MOVIES_NUMBER = 8;
const MIN_RATINGS_NUMBER = 1;
const MAX_RATINGS_NUMBER = 1000;


const promoMovieMock = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014,
};

const MOVIE_TITLES = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
];

const MOVIES_THUMBS = [
  `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  `img/bohemian-rhapsody.jpg`,
  `img/macbeth.jpg`,
  `img/aviator.jpg`,
  `img/we-need-to-talk-about-kevin.jpg`,
  `img/what-we-do-in-the-shadows.jpg`,
  `img/revenant.jpg`,
  `img/johnny-english.jpg`,
  `img/shutter-island.jpg`,
  `img/pulp-fiction.jpg`,
];

const GENRES = [
  `Comedies`,
  `Crime`,
  `Documentary`,
  `Dramas`,
  `Horror`,
  `Kids & Family`,
  `Romance`,
  `Sci-Fi`,
  `Thrillers`,
];

const YEARS = Array.from({length: 10}).fill(2010).map((x, i) => x + i);

const DIRECTORS = [`Wes Anderson`, `Christopher Nolan`, `Stiven Spilberg`];

const ACTORS = [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `James Franco`, `Jason Statham`, `Tom Hardy`];

const DESCRIPTION = `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H.
   (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege. Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there.
   When one of Gustave's lovers dies mysteriously. Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.
`.split(`. `);

const generateMovie = () => {
  const idx = Math.floor(Math.random() * (MOVIES_NUMBER - 1));

  return {
    id: ID_PREFIX + nanoid(10),
    title: MOVIE_TITLES[idx],
    thumb: MOVIES_THUMBS[idx],
    genre: GENRES[getRandomArrayNumber(GENRES)],
    year: YEARS[getRandomArrayNumber(YEARS)],
    poster: `img/the-grand-budapest-hotel-poster`,
    director: DIRECTORS[getRandomArrayNumber(DIRECTORS)],
    actors: getRandomArray(ACTORS),
    description: getRandomArray(DESCRIPTION),
    rating: getRandomRating(),
    ratingsCount: getRandomInRange(MIN_RATINGS_NUMBER, MAX_RATINGS_NUMBER),
  };
};

const moviesMocks = Array(MOVIES_NUMBER).fill(``).map(generateMovie);

export {moviesMocks, promoMovieMock};
