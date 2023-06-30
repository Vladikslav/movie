import { render } from '../render.js';
import MovieView from '../view/movie-view.js';
import MovieSortView from '../view/movie-sort-view.js';
import MovieButtonMoreView from '../view/movie-button-more-view.js';
import MovieListView from '../view/movie-list-view.js';
import MovieListContainerView from '../view/movies-list-container-view.js';
import MovieCardView from '../view/movie-card-view.js';
import MovieCardTopRatedView from '../view/movie-top-rated-view.js';
import MovieMostCommentedView from '../view/movie-most-commented-view.js';


export default class MoviePresenter {
  movieComponent = new MovieView();
  movieListComponent = new MovieListView();
  movieListContainerComponent = new MovieListContainerView();
  init = (movieContainer) => {
    this.movieContainer = movieContainer;
    render(new MovieSortView(), this.movieContainer);
    render(this.movieComponent, this.movieContainer);
    render(this.movieListComponent, this.movieComponent.getElement());
    render(this.movieListContainerComponent, this.movieListComponent.getElement());
    for (let i = 0; i < 5; i++) {
      render(new MovieCardView(), this.movieListContainerComponent.getElement());
    }
    render(new MovieButtonMoreView(), this.movieListComponent.getElement());
    render(new MovieCardTopRatedView(), this.movieComponent.getElement());
    render(new MovieMostCommentedView(), this.movieComponent.getElement());
  };
}
