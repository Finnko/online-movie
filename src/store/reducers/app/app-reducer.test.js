import {actionTypes} from '../../action-types';
import appReducer from './app-reducer';

const initialState = {
  activeGenre: `All genres`,
  moviesRenderNumber: 8,
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
      moviesRenderNumber: 8,
    });
  });

  it(`App reducer should change movies render limit`, () => {
    expect(appReducer(initialState, {
      type: actionTypes.CHANGE_MOVIES_LIMIT,
      payload: 8,
    })).toEqual({
      activeGenre: `All genres`,
      moviesRenderNumber: 16,
    });
  });

  it(`App reducer should reset movies render limit`, () => {
    expect(appReducer(initialState, {
      type: actionTypes.RESET_MOVIES_LIMIT,
    })).toEqual({
      activeGenre: `All genres`,
      moviesRenderNumber: 8,
    });
  });
});
