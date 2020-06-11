import nanoid from 'nanoid';

const MOVIES_NUMBER = 8;
const ID_PREFIX = `id_`;

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

const generateMovie = () => {
  const idx = Math.floor(Math.random() * (MOVIES_NUMBER - 1));

  return {
    id: ID_PREFIX + nanoid(10),
    title: MOVIE_TITLES[idx],
    thumb: MOVIES_THUMBS[idx],
  };
};

const moviesMocks = Array(MOVIES_NUMBER).fill(``).map(generateMovie);

export {moviesMocks, promoMovieMock};
