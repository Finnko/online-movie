import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from './tabs.tsx';

const mock = {
  id: 1,
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  thumb: `img/bohemian-rhapsody.jpg`,
  releaseYear: 2014,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  director: `Michael Bay`,
  actors: [`Leonardo Di Caprio`],
  rating: 7.5,
  ratingCount: 250,
  poster: `/img/the-grand-budapest-hotel-poster.jpg`,
};

const reviewMock = [
  {
    id: 1,
    comment: `Good comment!`,
    rating: 8.9,
    user: {
      name: `Ozzy Osbourne`,
      id: 1,
    },
    date: new Date(1583591483969),
  },
  {
    id: 1,
    comment: `Good comment!`,
    rating: 8.9,
    user: {
      name: `Axl Rose`,
      id: 1,
    },
    date: new Date(1583591483969),
  },
];

describe(`Tabs component render correctly`, () => {
  it(`Should Tabs component render correctly`, () => {
    const tree = renderer
      .create(
          <Tabs movie={mock} activeItem={`Overview`} reviews={reviewMock} onActiveItemChange={() => {}}/>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
