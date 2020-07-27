import React from 'react';
import renderer from 'react-test-renderer';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import MoviesList from './movies-list';

const mock = [
  {
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
  }
];

describe(`MoviesList component render correctly`, () => {
  it(`Should MoviesList component render correctly`, () => {
    const history = createMemoryHistory();

    const tree = renderer
      .create(
          <Router history={history}>
            <MoviesList
              movies={mock}
              viewMode={`WITH_PLAYER`}
            />
          </Router>, {
            createNodeMock: () => {
              return {};
            },
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
