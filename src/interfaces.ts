interface Movie {
  id: number,
  title: string
  poster: string,
  thumb: string,
  preview: string,
  videoSrc: string,
  releaseYear: number,
  description: string,
  backgroundColor: string,
  backgroundImage: string,
  director: string,
  rating: number,
  ratingCount: number,
  runTime: number,
  starring: string[],
  genre: string,
  isFavorite: boolean,
}

interface Review {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: {
    id: number,
    name: string,
  }
}

interface User {
  id: number,
  email: string,
  name: string,
  avatarUrl: string,
}

export {
  Movie,
  Review,
  User,
}
