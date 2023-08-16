import AbstractView from '../framework/view/abstract-view.js';

const createListMovieEmptyTemplate = () => '<h2 class="films-list__title">There are no movies in our database</h2>';
/*наследует абстрактный класс и возвращает шаблон пустой строки*/
export default class EmptyMovieListView extends AbstractView {
  get template() {
    return createListMovieEmptyTemplate();
  }
}
