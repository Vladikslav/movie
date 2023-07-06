import { createElement } from '../render.js';
import { movieCardControll } from './movie-card-controll-view.js';
import { movieCardInfo } from './movie-card-info-view.js';
const createMovieCardTemplate = ({movieInfo, comments}) =>
  `
    <article class="film-card">
        ${movieCardInfo(movieInfo, comments)}
        ${movieCardControll()}
    </article>
`;

export default class MovieCardView {
  #element = null;
  constructor(movie) {
    this.movie = movie;
  }

  get template() {
    return createMovieCardTemplate(this.movie);
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
