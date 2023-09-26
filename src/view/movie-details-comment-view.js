import { formatStringToDateWithTime } from '../utils/movies.js';
const createCommentDetailTemplate = ({ emotion, comment, author, date }) => `
  <li class="film-details__comment">
  <span class="film-details__comment-emoji">
    <img src="./images/emoji/${emotion}.png" width="55" height="55" alt="${emotion}">
  </span>
  <div>
    <p class="film-details__comment-text">${comment}</p>
    <p class="film-details__comment-info">
      <span class="film-details__comment-author">${author}</span>
      <span class="film-details__comment-day">${formatStringToDateWithTime(date)}</span>
      <button class="film-details__comment-delete">Delete</button>
    </p>
  </div>
  </li>
`;
export const createMovieDetailCommentsTemplate = (comments) => `
<ul class="film-details__comments-list">
  ${comments.map(createCommentDetailTemplate).join('')}
</ul>`;
