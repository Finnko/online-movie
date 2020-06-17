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
  const movieMouseOverHandler = jest.fn();
  const movieMouseLeaveHandler = jest.fn();

  const movieCard = shallow(
      <MovieListCard movie={mock} onMovieMouseOver={movieMouseOverHandler} onMovieMouseLeave={movieMouseLeaveHandler}/>
  );

  const card = movieCard.find(`article`);

  it(`Should MovieListCard info passed correctly on hover`, () => {
    card.simulate(`mouseover`);
    card.simulate(`mouseleave`);

    expect(movieMouseOverHandler).toHaveBeenCalledWith(mock.id);
    expect(movieMouseLeaveHandler.mock.calls.length).toBe(1);
  });
});
