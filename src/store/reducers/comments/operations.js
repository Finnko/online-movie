import {ActionCreator} from '../../actions/action-creator';
import history from '../../../history';
import {PathName} from '../../../const.ts';

const Operation = {
  fetchComments: (id) => (dispatch, _, api) => {
    dispatch(ActionCreator.fetchCommentsRequest());

    return api.get(`/comments/${id}`)
      .then(({data}) => {
        dispatch(ActionCreator.fetchCommentsSuccess(data));
      })
      .catch(() => {
        dispatch(ActionCreator.fetchCommentsError());
      });
  },
  sendComment: ({rating, comment, id}) => (dispatch, _, api) => {
    dispatch(ActionCreator.sendCommentRequest());

    return api.post(`/comments/${id}`, {
      rating,
      comment
    })
      .then(() => {
        dispatch(ActionCreator.sendCommentSuccess());

        history.push(`${PathName.MOVIE_PAGE}${id}`);
      })
      .catch(() => {
        dispatch(ActionCreator.sendCommentError());
      });
  }
};

export {Operation};
