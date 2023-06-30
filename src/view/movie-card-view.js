import { createElement } from '../render.js';
import { movieCardControll } from './movie-card-controll-view.js';
import { movieCardInfo } from './movie-card-info-view.js';
const createMovieCardTemplate = () => `
    <article class="film-card">
        ${movieCardInfo()}
        ${movieCardControll()}
        </article>
`;

export default class MovieCardView {
  getTemplate() {
    return createMovieCardTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
