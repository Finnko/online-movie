import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card';

Enzyme.configure({
  adapter: new Adapter(),
});

const mock = {
  id: `1`,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  thumb: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
};

describe(`Test e2e MovieCard component`, () => {
  const movieMouseOverHandler = jest.fn();

  const movieCard = shallow(
      <MovieCard movie={mock} onMovieMouseOver={movieMouseOverHandler}/>
  );

  const card = movieCard.find(`article`);


  it(`Should MovieCard info passed correctly on hover`, () => {
    card.simulate(`mouseover`);
    expect(movieMouseOverHandler).toHaveBeenCalledWith(mock.id);
  });
});
