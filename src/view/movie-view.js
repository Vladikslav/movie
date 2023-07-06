import { createElement } from '../render.js';

const createMovieTemplate = () => '<section class="films"></section>';

export default class MovieView {
  #element = null;
  get template() {
    return createMovieTemplate();
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
