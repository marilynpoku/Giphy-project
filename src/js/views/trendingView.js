import View from "./View.js";
import imageGridView from "./imageGridView.js";

class TrendingView extends View {
  _parentEl = document.querySelector('[data-container="trending"]');

  addHandler(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    return imageGridView._generateImageMarkup(this._data);
  }
}

export default new TrendingView();
