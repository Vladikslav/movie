import AbstractView from '../framework/view/abstract-view.js';

const createMovieListContainerTemplate = () => '<section class="films-list__container"></section>';

export default class MovieListContainerView extends AbstractView {
  get template() {
    return createMovieListContainerTemplate();
  }
}
