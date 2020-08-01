import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {Router, Link} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {PathName} from '../../const';
import {MovieListCard} from './movie-list-card';
import {Movie} from "../../interfaces";

Enzyme.configure({
  adapter: new Adapter(),
});

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


describe(`Test e2e MovieListCard component`, () => {
  const movieMouseEnterHandler = jest.fn();
  const movieMouseLeaveHandler = jest.fn();

  it(`Test MovieListCard onMouseEnter callback`, () => {
    const wrapper = Enzyme.shallow(
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
    const wrapper = Enzyme.shallow(
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

    const wrapper = Enzyme.mount(
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
