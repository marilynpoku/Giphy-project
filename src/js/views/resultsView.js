import View from "./View.js";
import imageGridView from "./imageGridView.js";

class ResultsView extends View {
  _parentEl = document.querySelector('[data-container="search-results"]');

  _generateMarkup() {
    return imageGridView._generateImageMarkup(this._data);
  }
}

export default new ResultsView();
