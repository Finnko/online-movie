import {actionTypes} from '../../action-types';
import {extend} from '../../../utils/common';

const initialState = {
  loading: false,
  error: false,
  onceLoaded: false,
  comments: [],
};

export default function commentsReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case actionTypes.FETCH_COMMENTS_REQUEST:
      return extend(state, {
        loading: true,
      });
    case actionTypes.FETCH_COMMENTS_SUCCESS:
      return extend(state, {
        loading: false,
        comments: payload,
        error: false,
        onceLoaded: true,
      });
    case actionTypes.FETCH_COMMENTS_ERROR:
      return extend(state, {
        loading: false,
        error: true,
      });
    case actionTypes.SEND_COMMENT_REQUEST:
      return extend(state, {
        loading: true,
      });
    case actionTypes.SEND_COMMENT_SUCCESS:
      return extend(state, {
        loading: false,
        error: false,
      });
    case actionTypes.SEND_COMMENT_ERROR:
      return extend(state, {
        loading: false,
        error: true,
      });
  }

  return state;
}
