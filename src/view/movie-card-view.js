import AbstractView from '../framework/view/abstract-view.js';
import { movieCardControll } from './movie-card-controll-view.js';
import { movieCardInfo } from './movie-card-info-view.js';
/*наследует абстрактный класс и возвращает шаблон карточки фильма*/
const createMovieCardTemplate = ({ movieInfo, comments }) =>
  `
    <article class="film-card">
        ${movieCardInfo(movieInfo, comments)}
        ${movieCardControll()}
    </article>
`;

export default class MovieCardView extends AbstractView {
  #movie = null;
  constructor(movie) {
    super();
    this.#movie = movie;
  }

  get template() {
    return createMovieCardTemplate(this.#movie);
  }
  /*метод класса для добавления клика по ссылке на карточке фильма, для открытие попапа*/

  setClickOpenPopup = (callback) => {
    this._callback.appendClick = callback;
    this.element.querySelector('.film-card__link').addEventListener('click', this.#appendClickHandler);
  };

  /*Защищенный метод класса для обработки клика по карточке фильма*/
  #appendClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.appendClick();
  };
}
