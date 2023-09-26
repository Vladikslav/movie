import AbstractView from '../framework/view/abstract-view.js';

const createFilterItemTemplate = (filter, isCheked) => {
  const { key, name, count } = filter;
  return (`<a href="#${key}" class="main-navigation__item ${isCheked ? 'main-navigation__item--active' : ''}">${name} ${(key === 'all') ? '' : `<span class="main-navigation__item-count">${count}</span>`}</a>`);
};
const createMovieFilterTemplate = (filterItems) => {
  const filterItemsTemplate = filterItems.map((filter, index) => createFilterItemTemplate(filter, index === 0)).join('');
  return ` <nav class="main-navigation">${filterItemsTemplate}</nav>`;
};

export default class MovieFilterView extends AbstractView {
  #filters = null;
  constructor(filters) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createMovieFilterTemplate(this.#filters);
  }
}
