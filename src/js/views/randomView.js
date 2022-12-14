import View from "./View.js";

class RandomView extends View {
  _parentEl = document.querySelector('[data-container="random"]');
  _btn = document.querySelector(".random__btn");

  addHandlers(handler) {
    window.addEventListener("load", handler);
    this._btn.addEventListener("click", handler);
  }
}

export default new RandomView();
