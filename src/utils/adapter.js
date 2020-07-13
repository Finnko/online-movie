const adaptMovie = (data) => {
  return ({
    id: data.id,
    title: data.name,
    poster: data[`poster_image`],
    thumb: data[`preview_image`],
    preview: data[`preview_video_link`],
    videoSrc: data[`video_link`],
    releaseYear: data.released,
    description: data.description,
    backgroundImage: data[`background_image`],
    backgroundColor: data[`background_image`],
    rating: data.rating,
    ratingCount: data[`scores_count`],
    director: data.director,
    actors: data.starring,
    runTime: data[`run_time`],
    genre: data.genre,
    isFavorite: data[`is_favorite`],
  });
};

const adaptMovies = (data) => data.map((item) => adaptMovie(item));


export {adaptMovie, adaptMovies};
