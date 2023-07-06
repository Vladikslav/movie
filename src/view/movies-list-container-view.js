import { createElement } from '../render.js';

const createMovieListContainerTemplate = () => '<section class="films-list__container"></section>';

export default class MovieListContainerView {
  #element = null;
  get template() {
    return createMovieListContainerTemplate();
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
