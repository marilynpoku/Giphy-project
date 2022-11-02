import icons from 'url:../../img/icons.svg'

export default class View {

  _data
  _parentEl

  clear() {
    this._parentEl.innerHTML = ''
  }

  render(data) {

    if (!data) return

    this._data = data

    const markup = this._generateMarkup()

    this.clear()

    this._parentEl.innerHTML = markup
  }

  _generateMarkup() {
    return `
      <picture class="gif-img">
        <img srcset="${this._data.images.stills.original}" 
          alt="${this._data.title}" class="gif"
          data-src="${this._data.images.normal.webp} 1x, ${this._data.images.original.webp} 2x">
      </picture> 
    `
  }

  _loadImgs(entries, _observer) {

    entries.forEach(entry => {
      // 1. When the target is not intersecting 
      if (!entry.isIntersecting) return

      // 2. Replace stills scrcet with gif srcset (data-src)
      entry.target.srcset = entry.target.dataset.src
    })
  }

  _renderLazyLoadingImages() {

    // 1. Selecting all images that have a property of data-src 
    const images = document.querySelectorAll('img[data-src]')

    // 2. Replacing still images with gifs
    const imgObserver = new IntersectionObserver(this._loadImgs, {
      root: null,
      threshold: 0,
    })

    images.forEach(img => imgObserver.observe(img))
  }

  renderSpinner() {
    const markup = `
      <div class="spinner">
        <div>
          <svg class="spinner__icon">
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>
        <div class="spinner__text">
          <p>Giphy's will be here in a jiffy...</p>
        </div>
      </div>
    `
    this.clear()
    this._parentEl.innerHTML = markup
  }

  renderError(errMsg = 'Oh no something went snap!') {
    const markup = `
      <div class="error">
        <div>
          <svg class="error__icon">
            <use href="${icons}#icon-error-triangle"></use>
          </svg>
        </div>
        <div class="error__text">
            <p>${errMsg}</p>
        </div>
      </div>
    `

    this.clear()
    this._parentEl.innerHTML = markup
  }
}