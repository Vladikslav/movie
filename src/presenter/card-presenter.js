import MovieCardPopupView from '../view/movie-popup-view.js';
import MovieCardView from '../view/movie-card-view.js';
import { render, replace, remove } from '../framework/render.js';

export default class CardMoviePresenter {
  #commentsModel = null;
  #movieContainer = null;
  #movieListContainerComponent = null;
  #moviePoppupComponent = null;
  #movieCardComponent = null;
  #comments = null;
  #movie = null;
  constructor(commentsModel, movieContainer, movieListContainerComponent) {
    this.#commentsModel = commentsModel;
    this.#movieContainer = movieContainer;
    this.#movieListContainerComponent = movieListContainerComponent;
  }

  init = (movie) => {
    this.#movie = movie;
    const prevCardComponent = this.#movieCardComponent;
    const prevCardPopupComponent = this.#moviePoppupComponent;
    this.#movieCardComponent = new MovieCardView(movie);
    this.#comments = [...this.#commentsModel.get(movie)];
    this.#moviePoppupComponent = new MovieCardPopupView(movie, this.#comments);
    this.#movieCardComponent.setClickOpenPopup(this.#handleClick);

    if (prevCardComponent === null || prevCardPopupComponent === null) {
      render(this.#movieCardComponent, this.#movieListContainerComponent.element);
      return;
    }
    if (this.#movieListContainerComponent.contains(prevCardComponent.element)) {
      replace(this.#movieCardComponent, prevCardComponent);
    }
    if (this.#movieListContainerComponent.contains(prevCardPopupComponent.element)) {
      replace(this.#movieCardComponent, prevCardPopupComponent);
    }
    remove(prevCardComponent);
    remove(prevCardPopupComponent);
  };

  #removeChildPopup = () => {
    remove(this.#moviePoppupComponent);
    this.#movieContainer.parentElement.classList.remove('hide-overflow');
  };

  #onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.#removeChildPopup();
      document.removeEventListener('keydown', this.#onEscKeyDown);
    }
  };

  #appendChildPopup = () => {
    this.#movieContainer.parentElement.appendChild(this.#moviePoppupComponent.element, this.#movieCardComponent.element);
    this.#movieContainer.parentElement.classList.add('hide-overflow');
    document.addEventListener('keydown', this.#onEscKeyDown);
    this.#moviePoppupComponent.setClickClosePopup(() => this.#removeChildPopup());
  };

  #handleClick = () => {
    this.#appendChildPopup();
  };
}
