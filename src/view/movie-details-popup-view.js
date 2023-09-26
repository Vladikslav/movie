import {formatStringToDate, formatMinutesToTime} from '../utils/movies.js';
const generateGenreTitle = (genre) => genre.length > 1 ? 'Genres': 'Genre';
const generateGenreList = (genres) => genres.map((item) => `<span class="film-details__genre">${item}</span>`).join('');
const generateNameList = (names) => names.length < 1 ? names[0] : names.join(', ');
export const createMovieDetailsTemplate = ({title, director, writers, actors, alternativeTitle, totalRating, poster, ageRating , genre, release, runtime, description}) => `
<div class="film-details__info-wrap">
<div class="film-details__poster">
  <img class="film-details__poster-img" src="${poster}" alt="">

  <p class="film-details__age">${ageRating}+</p>
</div>

<div class="film-details__info">
  <div class="film-details__info-head">
    <div class="film-details__title-wrap">
      <h3 class="film-details__title">${title}</h3>
      <p class="film-details__title-original">Original: ${alternativeTitle}</p>
    </div>

    <div class="film-details__rating">
      <p class="film-details__total-rating">${totalRating}</p>
    </div>
  </div>

  <table class="film-details__table">
    <tbody><tr class="film-details__row">
      <td class="film-details__term">Director</td>
      <td class="film-details__cell">${director}</td>
    </tr>
    <tr class="film-details__row">
      <td class="film-details__term">Writers</td>
      <td class="film-details__cell">${generateNameList(writers)}</td>
    </tr>
    <tr class="film-details__row">
      <td class="film-details__term">Actors</td>
      <td class="film-details__cell">${generateNameList(actors)}</td>
    </tr>
    <tr class="film-details__row">
      <td class="film-details__term">Release Date</td>
      <td class="film-details__cell">${formatStringToDate(release.date)}</td>
    </tr>
    <tr class="film-details__row">
      <td class="film-details__term">Runtime</td>
      <td class="film-details__cell">${formatMinutesToTime(runtime)}</td>
    </tr>
    <tr class="film-details__row">
      <td class="film-details__term">Country</td>
      <td class="film-details__cell">${release.releaseCountry}</td>
    </tr>
    <tr class="film-details__row">
      <td class="film-details__term">${generateGenreTitle(genre)}</td>
      <td class="film-details__cell">
        ${generateGenreList(genre)}
    </tr>
  </tbody>
  </table>

  <p class="film-details__film-description">
   ${description}
  </p>
</div>
</div>
`;
