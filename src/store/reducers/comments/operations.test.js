import MockAdapter from "axios-mock-adapter";
import {createAPI} from '../../../api/api';
import {Operation} from './operations';
import {actionTypes} from '../../action-types';
import {apiMockHandlers, promisifyApiMockReply} from '../../../utils/helpers';

const requestId = 10;
const commentData = {
  id: 123,
  rating: `5`,
  comment: `Hello`,
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

describe(`User operations works correctly`, () => {
  const api = createAPI(apiMockHandlers);

  it(`Operation fetchComments should make a correct API call to fetch comments`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchCommentsOperation = Operation.fetchComments(requestId);

    apiMock
      .onGet(`/comments/${requestId}`)
      .reply(() => promisifyApiMockReply(commentsMock));

    return fetchCommentsOperation(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: actionTypes.FETCH_COMMENTS_SUCCESS,
          payload: commentsMock,
        });
      })
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: actionTypes.FETCH_COMMENTS_ERROR,
        });
      });
  });

  it(`Operation sendComment should make a correct API call to send comment`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const sendCommentOperation = Operation.sendComment(commentData);

    apiMock
      .onPost(`/comments/${requestId}`)
      .reply(() => promisifyApiMockReply());

    return sendCommentOperation(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: actionTypes.SEND_COMMENT_SUCCESS,
        });
      })
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: actionTypes.SEND_COMMENT_ERROR,
        });
      });
  });
});
