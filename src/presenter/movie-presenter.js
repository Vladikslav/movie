import MovieView from '../view/movie-view.js';
import MovieSortView from '../view/movie-sort-view.js';
import MovieButtonMoreView from '../view/movie-button-more-view.js';
import MovieListView from '../view/movie-list-view.js';
import MovieListContainerView from '../view/movies-list-container-view.js';
import CardMoviePresenter from './card-presenter.js';


import EmptyMovieListView from '../view/empty-movie-list-view.js';

//import MovieCardTopRatedView from '../view/movie-top-rated-view.js';
//import MovieMostCommentedView from '../view/movie-most-commented-view.js';

import { render, RenderPosition, remove } from '../framework/render.js';

const MOVIE_COUNT_STEP = 5;

export default class MoviePresenter {
  #movieContainer = null;
  #moviesModel = null;
  #commentsModel = null;
  #movieComponent = new MovieView();
  #movieListComponent = new MovieListView();
  #movieListContainerComponent = new MovieListContainerView();
  #movieSortView = new MovieSortView();
  #movieEmptyListView = new EmptyMovieListView();
  #loadShowMoreButtonComponent = new MovieButtonMoreView();
  #renderCardMovieCount = MOVIE_COUNT_STEP;
  #moviesArray = [];
  constructor(movieContainer, moviesModel, commentsModel) {
    this.#movieContainer = movieContainer;
    this.#moviesModel = moviesModel;
    this.#commentsModel = commentsModel;
  }

  init = () => {

    this.#moviesArray = [...this.#moviesModel.movies];
    this.#renderMovies();
  };


  /*Метод для сортировки фильмов*/

  #renderSort = () => {
    render(this.#movieSortView, this.#movieComponent.element, RenderPosition.BEFOREBEGIN);
  };
  /*Метод по созданию заголовка, если отсутствуют карточки товара*/

  #renderNoMovies = () => {
    render(this.#movieEmptyListView, this.#movieListComponent.element);
  };

  /*Метод по подгрузки карточек фильма при клике на кнопку показать еще*/

  #handleLoadMoreShowButtonClick = () => {
    this.#moviesArray.slice(this.#renderCardMovieCount, this.#renderCardMovieCount + MOVIE_COUNT_STEP).forEach((movie) => this.#renderCard(movie));
    this.#renderCardMovieCount += MOVIE_COUNT_STEP;
    if (this.#renderCardMovieCount >= this.#moviesArray.length) {
      remove(this.#loadShowMoreButtonComponent);
    }

  };

  #renderLoadShowMoreButton = () => {
    render(this.#loadShowMoreButtonComponent, this.#movieListComponent.element);
    this.#loadShowMoreButtonComponent.setClickHandler(this.#handleLoadMoreShowButtonClick);
  };

  #renderCards = (from, to) => {
    this.#moviesArray.slice(from, to).forEach((element) => {
      this.#renderCard(element);
    });
  };

  #renderMoviesContainer = () => {
    render(this.#movieListContainerComponent, this.#movieListComponent.element);
    /*Проходим циклом по готовому массиву и создаем карточки с фильмами*/
    this.#renderCards(0, Math.min(this.#moviesArray.length, MOVIE_COUNT_STEP));
    /*Проверяем условия в котором смотрим что, если карточек больше чем указано в константе, добавляем кнопку показать еще*/
    if (this.#moviesArray.length > MOVIE_COUNT_STEP) {
      this.#renderLoadShowMoreButton();
    }
  };


  /*Метод по созданию карточки фильма*/
  #renderCard = (movie) => {
    const cardMoviePresenter = new CardMoviePresenter(this.#commentsModel, this.#movieContainer, this.#movieListContainerComponent);
    cardMoviePresenter.init(movie);
  };

  #renderMovies = () => {
    render(this.#movieComponent, this.#movieContainer);
    render(this.#movieListComponent, this.#movieComponent.element);
    /*Проходимся по массиву и если пустой, добавляем заголовок с отсутсвием карточке фильмов*/

    if (this.#moviesArray.every((movie) => movie.isArchive)) {
      this.#renderNoMovies();
      return;
    }
    this.#renderSort();
    this.#renderMoviesContainer();
  };
}
