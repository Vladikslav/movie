import { render } from '../render.js';
import MovieView from '../view/movie-view.js';
import MovieSortView from '../view/movie-sort-view.js';
import MovieButtonMoreView from '../view/movie-button-more-view.js';
import MovieListView from '../view/movie-list-view.js';
import MovieListContainerView from '../view/movies-list-container-view.js';
import MovieCardView from '../view/movie-card-view.js';
import EmptyMovieListView from '../view/empty-movie-list-view.js';

//import MovieCardTopRatedView from '../view/movie-top-rated-view.js';
//import MovieMostCommentedView from '../view/movie-most-commented-view.js';
import MovieCardPopupView from '../view/movie-popup-view.js';

const MOVIE_COUNT_STEP = 5;

export default class MoviePresenter {
  #movieComponent = new MovieView();
  #movieListComponent = new MovieListView();
  #movieListContainerComponent = new MovieListContainerView();
  #movieContainer = null;
  #moviesModel = null;
  #commentsModel = null;
  #loadShowMoreButtonComponent = new MovieButtonMoreView();
  #renderCardMovieCount = MOVIE_COUNT_STEP;
  #movies = [];
  constructor(movieContainer, moviesModel, commentsModel) {
    this.#movieContainer = movieContainer;
    this.#moviesModel = moviesModel;
    this.#commentsModel = commentsModel;
  }

  init = () => {
    render(new MovieSortView(), this.#movieContainer);
    render(this.#movieComponent, this.#movieContainer);
    render(this.#movieListComponent, this.#movieComponent.element);
    render(this.#movieListContainerComponent, this.#movieListComponent.element);
    this.#movies = [...this.#moviesModel.movies];
    if (this.#movies.every((movie) => movie.isArchive)) {
      render(new EmptyMovieListView(), this.#movieListComponent.element);
    }
    else {
      for (let i = 0; i < Math.min(this.#movies.length, MOVIE_COUNT_STEP); i++) {
        this.#renderCard(this.#movies[i]);
      }
      if (this.#movies.length > MOVIE_COUNT_STEP) {
        render(this.#loadShowMoreButtonComponent, this.#movieListComponent.element);
        this.#loadShowMoreButtonComponent.element.addEventListener('click', this.#handleLoadMoreShowButtonClick);
      }
    }
  };

  #handleLoadMoreShowButtonClick = (evt) => {
    evt.preventDefault();
    this.#movies.slice(this.#renderCardMovieCount, this.#renderCardMovieCount + MOVIE_COUNT_STEP).forEach((movie) => this.#renderCard(movie));
    this.#renderCardMovieCount += MOVIE_COUNT_STEP;
    if (this.#renderCardMovieCount >= this.#movies.length) {
      this.#loadShowMoreButtonComponent.element.remove();
      this.#loadShowMoreButtonComponent.removeElement();
    }
  };

  #renderCard = (movie) => {
    const movieCardComponent = new MovieCardView(movie);
    const comments = [...this.#commentsModel.get(movie)];
    const moviePoppupComponent = new MovieCardPopupView(movie, comments);
    const removeChildPopup = () => {
      this.#movieContainer.parentElement.removeChild(moviePoppupComponent.element);
      this.#movieContainer.parentElement.classList.remove('hide-overflow');
    };
    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        removeChildPopup();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };
    const appendChildPopup = () => {
      this.#movieContainer.parentElement.appendChild(moviePoppupComponent.element, movieCardComponent.element);
      this.#movieContainer.parentElement.classList.add('hide-overflow');
      document.addEventListener('keydown', onEscKeyDown);
      moviePoppupComponent.element.querySelector('.film-details__close-btn').addEventListener('click', () => {
        removeChildPopup();
      });
    };
    movieCardComponent.element.querySelector('.film-card__link').addEventListener('click', (evt) => {
      evt.preventDefault();
      appendChildPopup();
    });

    render(movieCardComponent, this.#movieListContainerComponent.element);
  };
}
