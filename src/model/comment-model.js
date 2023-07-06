import {generateComments} from '../mock/comment.js';

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
