import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import NameSpace from '../../store/name-space';
import {AuthStatus} from '../../const';
import {Provider} from 'react-redux';
import {AddReviewPage} from './add-review-page';
import {Movie, User} from '../../interfaces';

Enzyme.configure({
  adapter: new Adapter(),
});

const mock: Movie[] = [
  {
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
  }
];
const mockUser: User = {
  id: 1,
  email: `Oliver.conner@gmail.com`,
  name: `Oliver.conner`,
  avatarUrl: `img/1.png`
};

const VALID_REVIEW = `Hello world! Hello world! Hello world! Hello world! Hello world! Hello world!`;

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.MOVIES]: {
    loading: false,
    error: false,
    movies: mock,
  },
  [NameSpace.USER]: {
    user: mockUser,
    authStatus: AuthStatus.NO_AUTH,
  }
});

const props = {
  currentMovie: mock[0],
  movieId: mock[0].id,
  review: `Test`,
  rating: `3`,
  isFormValid: true,
  loading: false,
  error: false,
};

describe(`Test e2e AddReviewPage component`, () => {
  const onFormSubmit = jest.fn();
  const history = createMemoryHistory();

  const textareaEvent = {
    target: {
      value: VALID_REVIEW,
      name: `review`,
    },
  };

  it(`Should AddReviewPage calls callbacks on action`, () => {
    const wrapper = Enzyme.mount(
        <Provider store={store}>
          <Router history={history}>
            <AddReviewPage
              {...props}
              onFormSubmit={onFormSubmit}
            />
          </Router>
        </Provider>
    );

    const radioBtn = wrapper.find(`input`).first();
    const textarea = wrapper.find(`textarea.add-review__textarea`);
    const form = wrapper.find(`form`);

    radioBtn.simulate(`change`);
    textarea.simulate(`change`, textareaEvent);
    form.simulate(`submit`);

    expect(onFormSubmit).toHaveBeenCalledWith({
      'comment': VALID_REVIEW,
      'id': 1,
      'rating': 1,
    });
  });
});
