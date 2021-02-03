import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import NameSpace from '../../store/name-space';
import {AuthStatus} from '../../const';
import {Provider} from 'react-redux';
import {SignIn} from './sign-in';
import {FormField, User} from '../../interfaces';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockUser: User = {
  id: 1,
  email: `Oliver.conner@gmail.com`,
  name: `Oliver.conner`,
  avatarUrl: `img/1.png`
};

const emailMock: FormField = {
  value: `a@a.ru`,
  valid: false,
  touched: false,
  validation: {
    required: true,
    email: true,
  }
};

const passwordMock: FormField = {
  value: `123456`,
  valid: false,
  touched: false,
  validation: {
    required: true,
    minLength: 6,
  }
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
  loading: false,
  error: false,
};

describe(`Test e2e SignIn component`, () => {
  const onFormSubmit = jest.fn();
  const history = createMemoryHistory();

  it(`Should SignIn submit proper data`, () => {
    const wrapper = Enzyme.mount(
        <Provider store={store}>
          <Router history={history}>
            <SignIn
              {...props}
              onFormSubmit={onFormSubmit}
            />
          </Router>
        </Provider>
    );

    const email = wrapper.find(`input`).first();
    const password = wrapper.find(`input`).at(1);
    const form = wrapper.find(`form`);

    email.simulate(`change`, emailMock);
    password.simulate(`change`, passwordMock);
    form.simulate(`submit`);

    expect(onFormSubmit).toHaveBeenCalledTimes(1);
  });
});
