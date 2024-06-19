class Quizz {
  #questions;
  #currentQuestionIndex;
  #score;
  constructor(questions) {
    this.#questions = questions;
    this.#currentQuestionIndex = 0;
    this.#score = 0;
  }
  answer(value) {
    let correct = false;
    if (value === this.#questions[this.#currentQuestionIndex].correctAnswer) {
      correct = true;
      this.#score += 100;
    }
    if (this.#currentQuestionIndex < this.#questions.length - 1) {
      this.#currentQuestionIndex++;
      return { gameEnded: false, correct };
    } else {
      return { gameEnded: true, correct };
    }
  }
  get question() {
    return this.#questions[this.#currentQuestionIndex];
  }
  get score() {
    return this.#score;
  }
}
