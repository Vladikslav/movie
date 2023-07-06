import { createElement } from '../render.js';

const createMovieButtonMoreTemplate = () => '<button class="films-list__show-more">Show more</button>';

export default class MovieButtonMoreView {
  #element = null;
  get template() {
    return createMovieButtonMoreTemplate();
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
