import nanoid from 'nanoid';
import {getRandomLengthArray, getRandomArrayNumber, getRandomInRange, getRandomRating} from '../utils/common';
import {reviewMocks} from './reviews';

const ID_PREFIX = `id_`;
const MOVIES_NUMBER = 8;
const MIN_RATINGS_NUMBER = 1;
const MAX_RATINGS_NUMBER = 1000;
const MIN_RUNTIME = 60;
const MAX_RUNTIME = 180;


const promoMovieMock = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseYear: 2014,
  backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
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

const MOVIE_THUMBS = [
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
  `Comedie`,
  `Crime`,
  `Documentary`,
  `Drama`,
  `Horror`,
  `Kids & Family`,
  `Romance`,
  `Sci-Fi`,
  `Thriller`,
];

const MOVIE_VIDEOS = [
  `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
];

const RELEASE_YEARS = Array.from({length: MOVIES_NUMBER}).fill(2012).map((x, i) => x + i);

const DIRECTORS = [`Wes Anderson`, `Christopher Nolan`, `Stiven Spilberg`];

const ACTORS = [
  `Leonardo Di Caprio`,
  `Bill Murray`,
  `Edward Norton`,
  `Jude Law`,
  `Willem Dafoe`,
  `James Franco`,
  `Jason Statham`,
  `Tom Hardy`,
  `Saoirse Ronan`,
  `Tony Revoloru`,
  `Tilda Swinton`,
  `Tom Wilkinson`,
  `Owen Wilkinson`,
  `Adrien Brody`,
  `Ralph Fiennes`,
  `Jeff Goldblu`
];

const DESCRIPTION = `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H.
   (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege. Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there.
   When one of Gustave's lovers dies mysteriously. Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.
`.split(`. `);

const generateMovie = () => {
  const idx = Math.floor(Math.random() * (MOVIES_NUMBER - 1));

  return {
    id: ID_PREFIX + nanoid(10),
    title: MOVIE_TITLES[idx],
    preview: MOVIE_THUMBS[idx],
    backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: MOVIE_VIDEOS[getRandomArrayNumber(MOVIE_VIDEOS)],
    genre: GENRES[getRandomArrayNumber(GENRES)],
    releaseYear: RELEASE_YEARS[getRandomArrayNumber(RELEASE_YEARS)],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    director: DIRECTORS[getRandomArrayNumber(DIRECTORS)],
    actors: getRandomLengthArray(ACTORS),
    description: getRandomLengthArray(DESCRIPTION),
    rating: getRandomRating(),
    ratingCount: getRandomInRange(MIN_RATINGS_NUMBER, MAX_RATINGS_NUMBER),
    runTime: getRandomInRange(MIN_RUNTIME, MAX_RUNTIME),
    reviews: getRandomLengthArray(reviewMocks),
  };
};

const movieMocks = Array(MOVIES_NUMBER).fill(``).map(generateMovie);

export {movieMocks, promoMovieMock};
