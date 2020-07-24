import {actionTypes} from '../../action-types';
import commentsReducer from './comments-reducer';

const initialState = {
  loading: false,
  error: false,
  onceLoaded: false,
  comments: [],
};

const commentsMock = [
  {
    comment: `This movie really touched my heart, it really is the best movie of the year and everyone should see this masterpiece.`,
    date: `2020-07-06T16:06:01.831Z`,
    id: 1,
    rating: 4.3,
    user: {
      id: 11,
      name: `Jack`
    },
  },
  {
    comment: `The editing is a mess, and the transitions of the plot or characters are rather strange. There is no narrative focus and the storytelling is unbalanced. I cannot really understand why such a bad movie received an overwhelming approval from the critics. `,
    date: `2020-07-09T16:06:01.831Z`,
    id: 2,
    rating: 9.3,
    user: {
      id: 15,
      name: `Kendall`
    },
  }
];

describe(`Comments reducer works correctly`, () => {
  it(`Comments reducer without additional parameters should return initial state`, () => {
    expect(commentsReducer(void 0, {})).toEqual(initialState);
  });

  it(`Comments reducer should change loading value when fetching comments`, () => {
    expect(commentsReducer({
      loading: false,
    }, {
      type: actionTypes.FETCH_COMMENTS_REQUEST,
    })).toEqual({
      loading: true,
    });
  });

  it(`Comments reducer should change loading and error value when failed to fetch comments`, () => {
    expect(commentsReducer({
      error: false,
    }, {
      type: actionTypes.FETCH_COMMENTS_ERROR,
    })).toEqual({
      error: true,
      loading: false,
    });
  });

  it(`Comments reducer should change comments data on success`, () => {
    expect(commentsReducer({
      comments: [],
      onceLoaded: false,
      loading: true,
    }, {
      type: actionTypes.FETCH_COMMENTS_SUCCESS,
      payload: commentsMock,
    })).toEqual({
      error: false,
      loading: false,
      comments: commentsMock,
      onceLoaded: true,
    });
  });

  it(`Comments reducer should change loading value when sending comment`, () => {
    expect(commentsReducer({
      loading: false,
    }, {
      type: actionTypes.SEND_COMMENT_REQUEST,
    })).toEqual({
      loading: true,
    });
  });

  it(`Comments reducer should change loading and error value when failed to send comment`, () => {
    expect(commentsReducer({
      error: false,
    }, {
      type: actionTypes.SEND_COMMENT_ERROR,
    })).toEqual({
      error: true,
      loading: false,
    });
  });

  it(`Comments reducer should change loading and error value on success`, () => {
    expect(commentsReducer({
      error: false,
    }, {
      type: actionTypes.SEND_COMMENT_SUCCESS,
    })).toEqual({
      error: false,
      loading: false,
    });
  });
});
