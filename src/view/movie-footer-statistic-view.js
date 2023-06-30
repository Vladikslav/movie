import { createElement } from '../render.js';

const createMovieFooterStatisticsTemplate = () => '<p>130 291 movies inside</p>';

export default class MovieFooterStatisticsView {
  getTemplate() {
    return createMovieFooterStatisticsTemplate();
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
