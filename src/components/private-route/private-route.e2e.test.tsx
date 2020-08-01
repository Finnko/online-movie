import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {PrivateRoute} from './private-route';
import {MemoryRouter} from 'react-router';
import {AuthStatus, PathName} from '../../const';

Enzyme.configure({
  adapter: new Adapter()
});

const TestComponent = () => <div>TestComponent</div>;
const props = {
  path: `/testprivatepath`,
};

describe(`Should Private Route works correctly`, () => {
  it(`Private Route should render component if user has been authenticated`, () => {
    const wrapper = Enzyme.mount(
        <MemoryRouter initialEntries={[props.path]}>
          <PrivateRoute
            exact
            authStatus={AuthStatus.AUTH}
            path={props.path}
          >
            <TestComponent />
          </PrivateRoute>
        </MemoryRouter>
    );

    expect(wrapper.exists(TestComponent)).toBe(true);
  });

  it(`Private Route should redirect if user is not authenticated`, () => {
    const wrapper = Enzyme.mount(
        <MemoryRouter initialEntries={[props.path]}>
          <PrivateRoute
            exact
            authStatus={AuthStatus.NO_AUTH}
            path={props.path}
          >
            <TestComponent />
          </PrivateRoute>
        </MemoryRouter>
    );
    const history = wrapper.find(`Router`).prop(`history`);
    expect(history.location.pathname).toBe(`${PathName.SIGN_IN}`);
  });
});
