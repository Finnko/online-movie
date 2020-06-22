const Config = {
  MOVIE_MAX_RATING: 10,
  MOVIE_ACTORS_TO_SHOW: 4,
  SIMILAR_MOVIES_TO_SHOW: 4,
  MOVIE_RATING_MAP: {
    0: `Bad`,
    3: `Normal`,
    5: `Good`,
    8: `Very good`,
    10: `Awesome`
  },
};

const PathName = {
  ROOT: `/`,
  MOVIE_PAGE: `/movie/`,
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
