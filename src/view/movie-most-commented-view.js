import { createElement } from '../render.js';
import { movieCardControll } from './movie-card-controll-view.js';
import { movieCardInfo } from './movie-card-info-view.js';
const createMovieMostCommentedTemplate = () => `
    <section class="films-list films-list--extra">
        <h2 class="films-list__title">Most commented</h2>
        <div class="films-list__container">
            <article class="film-card">
                ${movieCardInfo()}
                ${movieCardControll()}
            </article>
            <article class="film-card">
                ${movieCardInfo()}
                ${movieCardControll()}
            </article>   
        </div>
    </section>`;
export default class MovieMostCommentedView {
  getTemplate() {
    return createMovieMostCommentedTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
