import {generateComments} from '../mock/comment.js';
/*экспорт класса модели комментарий к фильму по умолчанию*/
export default class CommentsModel {
  #moviesModel = null;
  #allComments = [];
  #comments = [];

  constructor(moviesModel) {
    this.#moviesModel = moviesModel;
    this.generateAllComments();
  }

  generateAllComments() {
    this.#allComments = generateComments(this.#moviesModel.movies);
  }

  get = (movie) => {
    this.#comments = movie.comments.map((commentId) =>
      this.#allComments.find((comment) =>
        comment.id === commentId)
    );

    return this.#comments;
  };
}
