import MovieHeaderProfileView from './view/movie-profile-view.js';
import MovieFilterView from './view/movie-filter-view.js';
import MovieFooterStatisticsView from './view/movie-footer-statistic-view.js';
import MoviePresenter from './presenter/movie-presenter.js';
import { render } from './render.js';
import MoviesModel from './model/movie-model.js';
import CommentsModel from './model/comment-model.js';

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterElement = document.querySelector('.footer');
const siteFooterStatistics = siteFooterElement.querySelector('.footer__statistics');
const moviesModel = new MoviesModel();
const commentsModel = new CommentsModel(moviesModel);
const moviePresenter = new MoviePresenter(siteMainElement, moviesModel, commentsModel);
render(new MovieHeaderProfileView(), siteHeaderElement);
render(new MovieFooterStatisticsView(),siteFooterStatistics);
render(new MovieFilterView(), siteMainElement);

moviePresenter.init();
