const Config = {
  MOVIE_MAX_RATING: 10,
  MOVIE_ACTORS_TO_SHOW: 4,
  SIMILAR_MOVIES_TO_SHOW: 4,
  MOVIES_NUMBER_TO_SHOW: 18,
  MOVIES_NUMBER_LIMIT: 8,
  MOVIES_NUMBER_OFFSET: 8,
  MAX_GENRES_TO_SHOW: 9,
  MOVIE_RATING_MAP: {
    0: `Bad`,
    3: `Normal`,
    5: `Good`,
    8: `Very good`,
    10: `Awesome`,
  },
  COMMENT_RATING_MAP: {
    1: `1`,
    2: `2`,
    3: `3`,
    4: `4`,
    5: `5`,
  },
  COMMENT_LENGTH: {
    MIN: 50,
    MAX: 400,
  },
  PASSWORD_MIN_LENGTH: 6,
  DEFAULT_FILTER: `All genres`,
  SERVER_ORIGIN: `https://4.react.pages.academy`,
};

const EmptyText = {
  COMMENTS: `There are no comments for this movie. Add the first one!`,
};

const ServerError = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
};

const AuthStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const Errors = {
  FETCHING_DATA: `Something went wrong, please try again.`,
  UPDATE_FAVORITE: `Ooops, please try again.`,
  NO_RESPONSE: `Sorry, server is not responding, try again later.`,
  BAD_REQUEST: `Sorry, try again to send your request.`,
  WRONG_EMAIL: `Please enter a valid email address`,
  WRONG_PASSWORD: `Please enter a valid password. Minlength - `,
  WRONG_LOGIN_DATA: `We can’t recognize this email and password combination. Please try again.`,
};

const LoaderSetup = {
  SIZE: {
    SMALL: `small`,
    MEDIUM: `medium`,
  },
  POSITION: {
    ABSOLUTE: `absolute`,
    FIXED: `fixed`,
  }
};

const END_POINT = `https://4.react.pages.academy/wtw`;
const TIMEOUT = 1000 * 5;
const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

const PathName = {
  ROOT: `/`,
  MOVIE_PAGE: `/films/`,
  ADD_REVIEW: `/review`,
  SIGN_IN: `/login`,
  MY_LIST: `/mylist`,
  PLAYER: `/player`
};

const TabName = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

const ViewMode = {
  PROMO: {
    MAIN: `MAIN`,
    DETAILS: `DETAILS`
  },
  MOVIE_CARD: {
    WITH_PLAYER: `WITH_PLAYER`,
    IMAGE: `IMAGE`,
  }
};

export {
  Config,
  PathName,
  TabName,
  ViewMode,
  ServerError,
  AuthStatus,
  LoaderSetup,
  Errors,
  EmptyText,
  END_POINT,
  TIMEOUT,
  EMAIL_PATTERN,
};
