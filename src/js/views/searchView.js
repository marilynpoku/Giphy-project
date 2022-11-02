import View from './View.js'

class SearchView extends View {

  _parentEl = document.querySelector('.search-form')

  addSearchHandler(handler) {
    this._parentEl.addEventListener('submit', (e) => {
      e.preventDefault()
      handler()
    })
  }

  _clearInputField() {
    this._parentEl.querySelector('.search-form__input').value = ''
  }

  getQuery() {
    const query = this._parentEl.querySelector('.search-form__input').value
    this._clearInputField()
    return query
  }
}

export default new SearchView()