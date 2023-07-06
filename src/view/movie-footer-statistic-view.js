import { createElement } from '../render.js';

const createMovieFooterStatisticsTemplate = () => '<p>130 291 movies inside</p>';

export default class MovieFooterStatisticsView {
  #element = null;
  get template() {
    return createMovieFooterStatisticsTemplate();
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
