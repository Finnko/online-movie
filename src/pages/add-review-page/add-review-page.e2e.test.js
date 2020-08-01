import React from 'react';
import Enzyme, {mount} from "enzyme";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Adapter from "enzyme-adapter-react-16";
import configureStore from 'redux-mock-store';
import NameSpace from '../../store/name-space';
import {AuthStatus} from '../../const.ts';
import {Provider} from 'react-redux';
import {AddReviewPage} from './add-review-page';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockMovies = [
  {
    backgroundColor: `#FDFDFC`,
    backgroundImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Snatch.jpg`,
    description: `Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.`,
    director: `Guy Ritchie`,
    genre: `Comedy`,
    id: 14,
    isFavorite: true,
    name: `Snatch`,
    poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Snatch.jpg`,
    thumb: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/snatch.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: 0.2,
    released: 2000,
    runTime: 104,
    ratingCount: 716577,
    starring: [`Jason Statham`, `Brad Pitt`, `Benicio Del Toro`],
    videoSrc: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  },
];
const mockUser = {
  id: 1,
  email: `Oliver.conner@gmail.com`,
  name: `Oliver.conner`,
  avatarUrl: `img/1.png`
};

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.MOVIES]: {
    loading: false,
    error: false,
    movies: mockMovies,
  },
  [NameSpace.USER]: {
    user: mockUser,
    authStatus: AuthStatus.NO_AUTH,
  }
});

const props = {
  currentMovie: mockMovies[0],
  movieId: mockMovies[0].id,
  review: `Test`,
  rating: `3`,
  isFormValid: true,
  loading: false,
  error: false,
};

describe(`Test e2e AddReviewPage component`, () => {
  const onRadioChange = jest.fn();
  const onFormSubmit = jest.fn();
  const onInputChange = jest.fn();
  const history = createMemoryHistory();

  it(`Should AddReviewPage calls callbacks on action`, () => {
    const wrapper = mount(
        <Provider store={store}>
          <Router history={history}>
            <AddReviewPage
              {...props}
              onInputChange={onInputChange}
              onRadioChange={onRadioChange}
              onFormSubmit={onFormSubmit}
            />
          </Router>
        </Provider>
    );

    const radioBtn = wrapper.find(`input`).first();
    const textarea = wrapper.find(`textarea.add-review__textarea`);
    const form = wrapper.find(`form`);

    radioBtn.simulate(`change`);
    textarea.simulate(`change`);
    form.simulate(`submit`);

    expect(onInputChange).toHaveBeenCalledTimes(2);
    expect(onFormSubmit).toHaveBeenCalledTimes(1);
    expect(onFormSubmit).toHaveBeenCalledWith({"comment": `Test`, "id": 14, "rating": 3});
  });
});
