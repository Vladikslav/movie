import AbstractView from '../framework/view/abstract-view.js';

const createMovieTemplate = () => '<section class="films"></section>';

export default class MovieView extends AbstractView {
  get template() {
    return createMovieTemplate();
  }
}
