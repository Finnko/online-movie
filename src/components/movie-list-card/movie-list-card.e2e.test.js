import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MovieListCard} from './movie-list-card';

Enzyme.configure({
  adapter: new Adapter(),
});

const mock = {
  id: `1`,
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  preview: `img/bohemian-rhapsody.jpg`,
  releaseYear: 2014,
  videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
  description: [
    `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
  ],
  director: `Michael Bay`,
  actors: [`Leonardo Di Caprio`],
  rating: 7.5,
  ratingCount: 250,
  poster: `/img/the-grand-budapest-hotel-poster.jpg`,
  reviews: [
    {
      id: `1`,
      comment: `Good comment!`,
      rating: 8.9,
      user: `Ozzy Osbourne`,
      date: new Date(1583591483969),
    },
    {
      id: `3`,
      comment: `Bad comment!`,
      rating: 1.9,
      user: `Axl Rose`,
      date: new Date(1783591499969),
    },
  ],
};

describe(`Test e2e MovieListCard component`, () => {
  const movieMouseEnterHandler = jest.fn();
  const movieMouseLeaveHandler = jest.fn();

  it(`Should MovieListCard info passed correctly`, () => {
    const wrapper = shallow(
        <MovieListCard
          movie={mock}
          onMovieMouseEnter={movieMouseEnterHandler}
          onMovieMouseLeave={movieMouseLeaveHandler}
          viewMode={`IMAGE`}
        />
    );

    const card = wrapper.find(`article`);

    card.simulate(`mouseenter`);
    card.simulate(`mouseleave`);

    expect(movieMouseEnterHandler.mock.calls.length).toBe(1);
    expect(movieMouseEnterHandler).toHaveBeenCalledWith(mock.id);
    expect(movieMouseLeaveHandler.mock.calls.length).toBe(1);
  });
});
