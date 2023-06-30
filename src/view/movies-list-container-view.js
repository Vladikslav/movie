import { createElement } from '../render.js';

const createMovieListContainerTemplate = () => '<section class="films-list__container"></section>';

export default class MovieListContainerView {
  getTemplate() {
    return createMovieListContainerTemplate();
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
