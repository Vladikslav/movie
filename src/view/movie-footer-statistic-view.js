import AbstractView from '../framework/view/abstract-view.js';

const createMovieFooterStatisticsTemplate = () => '<p>130 291 movies inside</p>';

export default class MovieFooterStatisticsView extends AbstractView {
  get template() {
    return createMovieFooterStatisticsTemplate();
  }
}
