import { async } from 'regenerator-runtime'
import { API_URL, API_KEY } from './config.js'
import { getJSON } from './helpers.js'

export const state = {
  randomGif: {},
  trendingGifs: [],
  search: {
    query: '',
    results: [],
  },
}

export const createObject = (data) => {

  return {
    title: data.title,
    images: {
      normal: {
        gif: data.images.fixed_height.url,
        webp: data.images.fixed_height.webp,
      },
      original: {
        gif: data.images.original.url,
        webp: data.images.original.webp,
      },
      stills: {
        original: data.images.original_still.url,
        normal: data.images.fixed_height_still.url,
      },
    },
  }
}


export const loadRandomGif = async () => {

  try {
    const { data } = await getJSON(`${API_URL}random?api_key=${API_KEY}`)
    state.randomGif = createObject(data)
  } catch (error) {
    throw error
  }
}

export const loadSearchResults = async (query) => {

  try {

    state.search.query = query

    if (!query) throw new Error('Enter a word or phrase to begin search')

    const { data } = await getJSON(`${API_URL}search?q=${query}&api_key=${API_KEY}`)

    state.search = {
      query: '',
      results: [],
    }

    data.map(gif => {
      const obj = createObject(gif)
      state.search.results.push(obj)
    })

    if (state.search.results.length === 0) throw new Error(`No GIFs found for ${query}. Try a different word or phrase!`)

  } catch (error) {
    throw error
  }
}

export const loadTrendingGifs = async () => {
  try {
    const { data } = await getJSON(`${API_URL}trending?api_key=${API_KEY}`)

    data.map(gif => {
      const obj = createObject(gif)
      state.trendingGifs.push(obj)
    })

  } catch (error) {
    throw error
  }
}

