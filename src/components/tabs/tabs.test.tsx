import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Tabs from './tabs';
import {Movie} from "../../interfaces";

const mock: Movie = {
  id: 1,
  title: `The Grand Budapest Hotel`,
  poster: `/img/the-grand-budapest-hotel-poster.jpg`,
  thumb: `img/bohemian-rhapsody.jpg`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  releaseYear: 2014,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  backgroundColor: `#f5f5f5`,
  backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
  director: `Michael Bay`,
  rating: 7.5,
  ratingCount: 250,
  runTime: 199,
  actors: [`Leonardo Di Caprio`],
  genre: `Drama`,
  isFavorite: false,
};

describe(`Tabs component render correctly`, () => {
  it(`Should Tabs component render correctly`, () => {
    const tree = renderer
      .create(
          <Tabs
            movie={mock}
            activeItem={`Overview`}
            onActiveItemChange={() => {}}
          />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
