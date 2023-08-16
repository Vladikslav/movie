import AbstractView from '../framework/view/abstract-view.js';
import { movieCardControll } from './movie-card-controll-view.js';
import { movieCardInfo } from './movie-card-info-view.js';

const createMovieTopRatedTemplate = () => `
    <section class="films-list films-list--extra">
        <h2 class="films-list__title">Top rated</h2>
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
export default class MovieCardTopRatedView extends AbstractView {
  get template() {
    return createMovieTopRatedTemplate();
  }
}
