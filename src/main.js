import MovieHeaderProfileView from './view/movie-profile-view.js';
import MovieFilterView from './view/movie-filter-view.js';
import MovieFooterStatisticsView from './view/movie-footer-statistic-view.js';
import MoviePresenter from './presenter/movie-presenter.js';
import MovieCardPopupView from './view/movie-popup-view.js';

import { render } from './render.js';
const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterElement = document.querySelector('.footer');
const siteFooterStatistics = siteFooterElement.querySelector('.footer__statistics');
const moviePresenter = new MoviePresenter();
render(new MovieHeaderProfileView(), siteHeaderElement);
render(new MovieFooterStatisticsView(),siteFooterStatistics);
render(new MovieFilterView(), siteMainElement);
render(new MovieCardPopupView(), siteFooterElement, 'AFTEREND');

moviePresenter.init(siteMainElement);
