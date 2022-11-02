import View from './View.js'
// imageGridView generates the markup for rendering gif images in the trendingView and searchView 

class ImageGridView extends View {

  _parentEl = ''

  _generateImageMarkup(data) {

    return data
      .map(gif =>
        `
        <div class="gif-container">
          <picture class="gif-img">
            <img srcset="${gif.images.stills.original}" 
              alt="${gif.title}" class="gif"
              data-src="${gif.images.normal.webp} 1x, ${gif.images.original.webp} 2x">
          </picture> 
        </div>`).join('')
  }
}
export default new ImageGridView()

