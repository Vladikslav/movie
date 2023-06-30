import { createElement } from '../render.js';

const createMovieTemplate = () => '<section class="films"></section>';

export default class MovieView {
  getTemplate() {
    return createMovieTemplate();
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
