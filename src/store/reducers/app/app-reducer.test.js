import {actionTypes} from '../../action-types';
import appReducer from './app-reducer';

const initialState = {
  activeGenre: `All genres`,
};


describe(`App reducer works correctly`, () => {
  it(`App reducer without additional parameters should return initial state`, () => {
    expect(appReducer(void 0, {})).toEqual(initialState);
  });

  it(`App reducer should change genre on action`, () => {
    expect(appReducer(initialState, {
      type: actionTypes.CHANGE_ACTIVE_GENRE,
      payload: `Crime`,
    })).toEqual({
      activeGenre: `Crime`,
    });
  });
});
