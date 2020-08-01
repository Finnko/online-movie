import {ServerCodes} from '../const.ts';

const apiMockHandlers = {
  handleUnauthorized: () => {},
  handleNoResponse: () => {},
  handleNotFound: () => {},
  handleBadRequest: () => {},
};

const promisifyApiMockReply = (data = []) => {
  return new Promise((resolve) => {
    if (Math.random() > 0.5) {
      resolve([ServerCodes.SUCCESS, data]);
    } else {
      resolve(ServerCodes.BAD_REQUEST);
    }
  });
};

export {
  promisifyApiMockReply,
  apiMockHandlers,
};
