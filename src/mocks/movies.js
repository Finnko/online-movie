import nanoid from 'nanoid';
import {getRandomArrayNumber} from "../utils/common";

const MOVIES_NUMBER = 8;

const promoMovieMock = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014,
};

const data = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    thumb: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  },
  {
    title: `Bohemian Rhapsody`,
    thumb: `img/bohemian-rhapsody.jpg`,
  },
  {
    title: `Macbeth`,
    thumb: `img/macbeth.jpg`,
  },
  {
    title: `Aviator`,
    thumb: `img/aviator.jpg`,
  },
  {
    title: `We need to talk about Kevin`,
    thumb: `img/we-need-to-talk-about-kevin.jpg`,
  },
  {
    title: `What We Do in the Shadows`,
    thumb: `img/what-we-do-in-the-shadows.jpg`,
  },
  {
    title: `Revenant`,
    thumb: `img/revenant.jpg`,
  },
  {
    title: `Johnny English`,
    thumb: `img/johnny-english.jpg`,
  },
  {
    title: `Shutter Island`,
    thumb: `img/shutter-island.jpg`,
  },
  {
    title: `Pulp Fiction`,
    thumb: `img/pulp-fiction.jpg`,
  },
];

const generateMocks = (quantity) => {
  const result = [];

  for (let i = 0; i < quantity; i++) {
    const id = nanoid(10);
    const item = Object.assign({}, data[getRandomArrayNumber(data)], {id});
    result.push(item);
  }

  return result;
}

const moviesMocks = generateMocks(MOVIES_NUMBER);

export {moviesMocks, promoMovieMock};
