import { async } from 'regenerator-runtime'
import { TIMEOUT_SEC } from './config.js'

const timeout = (s) => {
  return new Promise((_, reject) => {
    setTimeout(function () {
      reject(new Error(`Request too too long! Timeout after ${s} second`))
    }, s * 1000)
  })
}

export const getJSON = async (url) => {
  try {

    const encoded = encodeURI(url)
    const fetchPro = fetch(encoded)
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)])
    const data = await res.json()

    if (!res.ok) throw new Error('Oh no, something went snap!')

    return data

  } catch (error) {
    throw error
  }
}


