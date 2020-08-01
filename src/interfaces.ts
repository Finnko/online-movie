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
  actors: string[],
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

interface FormField {
  value: string,
  valid: boolean,
  touched: boolean,
  validation: {
    required: boolean,
    email?: boolean ,
    minLength?: number,
  }
}

export {
  Movie,
  Review,
  User,
  FormField,
}
