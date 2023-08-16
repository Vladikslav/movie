import AbstractView from '../framework/view/abstract-view.js';

const createMovieButtonMoreTemplate = () => '<button class="films-list__show-more">Show more</button>';
/*наследует абстрактный класс и возвращает шаблон кнопки Show more*/
export default class MovieButtonMoreView extends AbstractView {
  get template() {
    return createMovieButtonMoreTemplate();
  }
  /*метод класса для добавления клика по кнопке Show more*/

  setClickHandler = (callback) => {
    this._callback.click = callback;
    this.element.addEventListener('click', this.#clickHandler);
  };

  /*Защищенный метод класса для обработки клика по кнопке Show more*/
  #clickHandler = (evt) => {
    evt.preventDefault();
    this._callback.click();
  };
}
