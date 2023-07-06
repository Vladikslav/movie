import { createElement } from '../render.js';
import { createMovieDetailCommentsTemplate } from './movie-details-comment-view.js';
import { createMovieDetailControllTemplate } from './movie-details-control-view.js';
import { createMovieDetailFormTemplate } from './movie-details-form-view.js';
import { createMovieDetailsTemplate } from './movie-details-popup-view.js';
const createCardPopupTemplate = ({movieInfo}, comments) => `
<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      ${createMovieDetailsTemplate(movieInfo)}
      ${createMovieDetailControllTemplate()}      
    </div>

    <div class="film-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>
        ${createMovieDetailCommentsTemplate(comments)}
        ${createMovieDetailFormTemplate()}
      </section>
    </div>
  </form>
</section>
`;

export default class MovieCardPopupView {
  #element = null;
  constructor(movie, comments) {
    this.movie = movie;
    this.comments = comments;
  }

  get template() {
    return createCardPopupTemplate(this.movie, this.comments);
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
