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
  OVERVIEW: `overview`,
  DETAILS: `details`,
  REVIEWS: `reviews`
};

export {
  Config,
  PathName,
  TabName
};
