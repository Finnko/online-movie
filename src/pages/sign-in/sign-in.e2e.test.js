import React from 'react';
import Enzyme, {mount} from "enzyme";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Adapter from "enzyme-adapter-react-16";
import configureStore from 'redux-mock-store';
import NameSpace from '../../store/name-space';
import {AuthStatus} from '../../const.ts';
import {Provider} from 'react-redux';
import {SignIn} from './sign-in.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});


const mockUser = {
  id: 1,
  email: `Oliver.conner@gmail.com`,
  name: `Oliver.conner`,
  avatarUrl: `img/1.png`
};

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.USER]: {
    user: mockUser,
    loading: false,
    error: false,
    authStatus: AuthStatus.NO_AUTH,
  }
});

const props = {
  formControls: {
    email: {
      value: `a@a.ru`,
      valid: false,
      touched: false,
    },
    password: {
      value: `123456`,
      valid: false,
      touched: false,
    }
  },
  isFormValid: true,
  loading: false,
  error: false,
};

describe(`Test e2e SignIn component`, () => {
  const onFormSubmit = jest.fn();
  const onInputChange = jest.fn();
  const history = createMemoryHistory();

  it(`Should SignIn calls callbacks on action`, () => {
    const wrapper = mount(
        <Provider store={store}>
          <Router history={history}>
            <SignIn
              {...props}
              onInputChange={onInputChange}
              onFormSubmit={onFormSubmit}
            />
          </Router>
        </Provider>
    );

    const email = wrapper.find(`input`).first();
    const password = wrapper.find(`input`).at(1);
    const form = wrapper.find(`form`);

    email.simulate(`change`);
    password.simulate(`change`);
    form.simulate(`submit`);

    expect(onInputChange).toHaveBeenCalledTimes(2);
    expect(onFormSubmit).toHaveBeenCalledTimes(1);
    expect(onFormSubmit).toHaveBeenCalledWith({"email": `a@a.ru`, "password": `123456`});
  });
});
