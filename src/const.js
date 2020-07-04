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
    10: `Awesome`
  },
  COMMENT_RATING_MAP: {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
  },
  COMMENT_LENGTH: {
    MIN: 50,
    MAX: 400,
  },
  ERRORS: {
    FETCH_DATA: `Something went wrong, please try again.`,
  },
  LOADER: {
    SMALL: `small`,
    MEDIUM: `medium`,
  },
  DEFAULT_FILTER: `All genres`,
};

const PathName = {
  ROOT: `/`,
  MOVIE_PAGE: `/films/`,
  ADD_REVIEW: `/review`,
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
};
