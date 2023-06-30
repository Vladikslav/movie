import { createElement } from '../render.js';

const createMovieButtonMoreTemplate = () => '<button class="films-list__show-more">Show more</button>';

export default class MovieButtonMoreView {
  getTemplate() {
    return createMovieButtonMoreTemplate();
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
