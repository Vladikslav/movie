import { generateMovies } from '../mock/movie.js';
/*экспорт класса модели фильма по умолчанию*/
export default class MoviesModel {
  /*создание защищенного свойства и присвоение вызова функции по генерированию фильмов*/
  #movies = generateMovies();
  get movies () { return this.#movies; }
}
