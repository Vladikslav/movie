import { getRandomInteger, getRandomValue } from '../utils/common.js';
import { DaysDuration, names, surnames, emotions, comment } from './const.js';

const getDate = () => {
  const date = new Date();

  date.setDate(
    date.getDate() - getRandomInteger(DaysDuration.MIN, DaysDuration.MAX)
  );

  return date.toISOString();
};
const generateComment = () => ({
  author: `${getRandomValue(names)} ${getRandomValue(surnames)}`,
  comment,
  date: getDate(),
  emotion: getRandomValue(emotions),
});
/*Функция возвращает количество комментариев в карточке фильма*/
const getCommentCount = (movies) => movies.reduce((count, movie) => count + movie.comments.length, 0);
/*Функция создает комментарии в карточке фильма*/
const generateComments = (movies) => {
  const commentCount = getCommentCount(movies);
  return Array.from({ length: commentCount }, (_value, index) => {
    const commentItem = generateComment();
    return {
      id: String(index + 1),
      ...commentItem,
    };
  });
};
export { generateComments };
