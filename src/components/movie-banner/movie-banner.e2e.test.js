import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Router, Link} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {AuthStatus, PathName} from '../../const';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../store/name-space';
import MovieBanner from './movie-banner.jsx';

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
  isFavorite: false,
  poster: `/img/the-grand-budapest-hotel-poster.jpg`,
};
const mockUser = {
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
    const wrapper = shallow(
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
    const wrapper = shallow(
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

    const wrapper = mount(
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
