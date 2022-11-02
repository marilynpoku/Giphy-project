import * as model from './model.js'
import randomView from './views/randomView.js'
import searchView from './views/searchView.js'
import resultsView from './views/resultsView.js'
import trendingView from './views/trendingView.js'

const controlRandomGif = async () => {

  try {

    // 1. Load spinner 
    randomView.renderSpinner()

    // 2. Load random gif 
    await model.loadRandomGif()

    // 3. Render random gif
    randomView.render(model.state.randomGif)

    // 4. Load lazy images
    randomView._renderLazyLoadingImages()

  } catch (error) {
    randomView.renderError()

  }
}

const controlSearchResults = async () => {
  try {

    // 1. get user query 
    const query = searchView.getQuery()

    // 2. Load spinner 
    resultsView.renderSpinner()

    // 3. Load search results 
    await model.loadSearchResults(query)

    // 4. Render search results 
    resultsView.render(model.state.search.results)

    // 5. Load lazy images 
    resultsView._renderLazyLoadingImages()


  } catch (error) {
    resultsView.renderError(error.message)
  }
}

const controlTrendingGifs = async () => {

  try {

    // 1. Load spinner 
    trendingView.renderSpinner()

    // 2. Load trending gifs 
    await model.loadTrendingGifs(model.state.trendingGifs)

    // 3. Render gifs
    trendingView.render(model.state.trendingGifs)

    // 4. Load lazy images 
    trendingView._renderLazyLoadingImages()

  } catch (error) {
    trendingView.renderError()
  }
}

const init = () => {
  randomView.addHandlers(controlRandomGif)
  searchView.addSearchHandler(controlSearchResults)
  trendingView.addHandler(controlTrendingGifs)

}
init()