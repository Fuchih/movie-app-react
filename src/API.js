import axios from 'axios'
import { SEARCH_BASE_URL, POPULAR_BASE_URL, API_URL, API_KEY } from './config'

const apiSettings = {
  fetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}&page=${page}`
    let res = (await axios(endpoint))
    return res.data
  },
  fetchMovie: async (movieId) => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`
    let res = (await axios(endpoint))
    return res.data
  },
  fetchCredits: async (movieId) => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`
    let res = (await axios(creditsEndpoint))
    return res.data
  }
}

export default apiSettings
