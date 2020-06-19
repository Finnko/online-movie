import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieListCard from './movie-list-card';

Enzyme.configure({
  adapter: new Adapter(),
});

const mock = {
  id: `1`,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  thumb: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
};

describe(`Test e2e MovieListCard component`, () => {
  const movieMouseEnterHandler = jest.fn();
  const movieMouseLeaveHandler = jest.fn();

  const movieCard = shallow(
      <MovieListCard movie={mock} onMovieMouseEnter={movieMouseEnterHandler} onMovieMouseLeave={movieMouseLeaveHandler}/>
  );

  const card = movieCard.find(`article`);

  it(`Should MovieListCard info passed correctly`, () => {
    card.simulate(`mouseenter`);
    card.simulate(`mouseleave`);

    expect(movieMouseEnterHandler.mock.calls.length).toBe(1);
    expect(movieMouseEnterHandler).toHaveBeenCalledWith(mock.id);
    expect(movieMouseLeaveHandler.mock.calls.length).toBe(1);
  });
});
