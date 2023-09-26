import { generateMovies } from '../mock/movie.js';
/*экспорт класса модели фильма по умолчанию*/
export default class MoviesModel {
  #movies = generateMovies();
  /*метод класса который возрщает список сгенерированных фильмов */
  get movies() { return this.#movies; }
}
