import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Router, Link} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {PathName} from '../../const';
import {MovieListCard} from './movie-list-card';

Enzyme.configure({
  adapter: new Adapter(),
});

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

describe(`Test e2e MovieListCard component`, () => {
  const movieMouseEnterHandler = jest.fn();
  const movieMouseLeaveHandler = jest.fn();

  it(`Test MovieListCard onMouseEnter callback`, () => {
    const wrapper = shallow(
        <MovieListCard
          isPlaying={false}
          movie={mock}
          onMovieMouseEnter={movieMouseEnterHandler}
          onMovieMouseLeave={movieMouseLeaveHandler}
          viewMode={`WITH_PLAYER`}
        />
    );

    const card = wrapper.find(`article`);
    card.simulate(`mouseenter`);

    expect(movieMouseEnterHandler.mock.calls.length).toBe(1);
  });

  it(`Test MovieListCard onMouseLeave callback`, () => {
    const wrapper = shallow(
        <MovieListCard
          isPlaying={false}
          movie={mock}
          onMovieMouseEnter={movieMouseEnterHandler}
          onMovieMouseLeave={movieMouseLeaveHandler}
          viewMode={`WITH_PLAYER`}
        />
    );

    const card = wrapper.find(`article`);
    card.simulate(`mouseleave`);

    expect(movieMouseLeaveHandler.mock.calls.length).toBe(1);
  });

  it(`MovieListCard should render correct route`, () => {
    const history = createMemoryHistory();

    const wrapper = mount(
        <Router history={history}>
          <MovieListCard
            isPlaying={false}
            movie={mock}
            onMovieMouseLeave={() => {}}
            onMovieMouseEnter={() => {}}
            viewMode={`IMAGE`}
          />
        </Router>
    );

    const link = wrapper.find(Link).first();
    expect(link.props().to).toBe(`${PathName.MOVIE_PAGE}${mock.id}`);
  });
});
