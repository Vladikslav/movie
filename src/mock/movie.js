import { getRandomInteger, getRandomValue } from '../util.js';
import { MOVIE_COUNT } from '../const.js';
import { NAME_COUNT, MAX_COMMENTS_ON_FILM, GenreCount, Rating, AgeRating, Runtime, YearsDuration, names, surnames, titles, posters, genres, description, countries } from './const.js';

const getDate = () => {
  const date = new Date();

  date.setFullYear(
    date.getFullYear() - getRandomInteger(YearsDuration.MIN, YearsDuration.MAX)
  );

  return date.toISOString();
};
const generateMovie = () => ({
  title: getRandomValue(titles),
  alternativeTitle: getRandomValue(titles),
  totalRating: getRandomInteger(Rating.MIN, Rating.MAX),
  poster: getRandomValue(posters),
  ageRating: getRandomInteger(AgeRating.MIN, AgeRating.MAX),
  director: `${getRandomValue(names)} ${getRandomValue(surnames)}`,
  writers: Array.from({ length: NAME_COUNT }, () => `${getRandomValue(names)} ${getRandomValue(surnames)}`),
  actors: Array.from({ length: NAME_COUNT }, () => `${getRandomValue(names)} ${getRandomValue(surnames)}`),
  release: {
    date: getDate(),
    releaseCountry: getRandomValue(countries)
  },
  runtime: getRandomInteger(Runtime.MIN, Runtime.MAX),
  genre: Array.from({ length: getRandomInteger(GenreCount.MIN, GenreCount.MAX) }, () => getRandomValue(genres)),
  description
});

const generateMovies = () => {
  const movies = Array.from({ length: MOVIE_COUNT }, generateMovie);
  let totalCommentCount = 0;
  return movies.map((movie, index) => {
    const hasComments = getRandomInteger(0, 1);
    const movieCommentsCount = hasComments ? getRandomInteger(1, MAX_COMMENTS_ON_FILM) : 0;
    totalCommentCount += movieCommentsCount;
    return {
      id: String(index + 1),
      comments: hasComments ? Array.from({length: movieCommentsCount}, (_value, commentIndex) => String(totalCommentCount - commentIndex)) : [],
      movieInfo: movie
    };
  });
};

export { generateMovies };
