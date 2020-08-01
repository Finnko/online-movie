import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {Router, Link} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {AuthStatus, PathName} from '../../const';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../store/name-space';
import MovieBanner from './movie-banner';
import {Movie, User} from '../../interfaces';

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
const mockUser: User = {
  id: 1,
  email: `Oliver.conner@gmail.com`,
  name: `Oliver.conner`,
  avatarUrl: `img/1.png`
};
const mockFavoriteTrue = Object.assign({}, mock, {isFavorite: true});

const props = {
  isAuth: true,
  error: false,
  loading: false,
};

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.USER]: {
    user: mockUser,
    authStatus: AuthStatus.NO_AUTH,
  }
});


describe(`Test e2e MovieBanner component`, () => {
  const updateFavoriteStatus = jest.fn();

  it(`Test MovieBanner updateFavoriteStatus callback adds to favorite`, () => {
    const wrapper = Enzyme.shallow(
        <MovieBanner
          {...props}
          movie={mock}
          updateFavoriteStatus={updateFavoriteStatus}
          viewMode={`DETAILS`}
        />
    );

    const btn = wrapper.find(`button.btn--list`);
    btn.simulate(`click`);

    expect(updateFavoriteStatus).toHaveBeenCalledTimes(1);
    expect(updateFavoriteStatus).toHaveBeenCalledWith(1, 1);
  });

  it(`Test MovieBanner updateFavoriteStatus callback removes from favorite`, () => {
    const wrapper = Enzyme.shallow(
        <MovieBanner
          {...props}
          movie={mockFavoriteTrue}
          updateFavoriteStatus={updateFavoriteStatus}
          viewMode={`DETAILS`}
        />
    );

    const btn = wrapper.find(`button.btn--list`);
    btn.simulate(`click`);

    expect(updateFavoriteStatus).toHaveBeenCalledTimes(2);
    expect(updateFavoriteStatus).toHaveBeenCalledWith(1, 0);
  });

  it(`MovieBanner should render correct routes`, () => {
    const history = createMemoryHistory();

    const wrapper = Enzyme.mount(
        <Provider store={store}>
          <Router history={history}>
            <MovieBanner
              {...props}
              movie={mock}
              updateFavoriteStatus={updateFavoriteStatus}
              viewMode={`DETAILS`}
            />
          </Router>
        </Provider>
    );

    const headerLink = wrapper.find(Link).first();
    expect(headerLink.props().to).toBe(`${PathName.ROOT}`);

    const playerLink = wrapper.find(Link).at(2);
    expect(playerLink.props().to).toBe(`${PathName.PLAYER}${mock.id}`);

    const addReviewLink = wrapper.find(Link).at(3);
    expect(addReviewLink.props().to).toBe(`${PathName.MOVIE_PAGE}${mock.id}${PathName.ADD_REVIEW}`);
  });
});
