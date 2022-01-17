import axios from 'axios'
import { SEARCH_BASE_URL, POPULAR_BASE_URL, API_URL, API_KEY, REQUEST_TOKEN_URL, LOGIN_URL, SESSION_ID_URL } from './config'

const defaultConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}

const apiSettings = {
  fetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}` : `${POPULAR_BASE_URL}&page=${page}`
    let res = await axios(endpoint)
    return res.data
  },
  fetchMovie: async (movieId) => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`
    let res = await axios(endpoint)
    return res.data
  },
  fetchCredits: async (movieId) => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`
    let res = await axios(creditsEndpoint)
    return res.data
  },
  // 登入換成使用fetch做練習
  getRequestToken: async () => {
    const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json()
    return reqToken.request_token
  },
  authenticate: async (requestToken, username, password) => {
    const bodyData = {
      username,
      password,
      request_token: requestToken
    }
    const data = await (
      await fetch(LOGIN_URL, {
        ...defaultConfig,
        body: JSON.stringify(bodyData)
      })
    ).json()
    if (data.success) {
      const sessionId = await (
        await fetch(SESSION_ID_URL, {
          ...defaultConfig,
          body: JSON.stringify({ request_token: requestToken })
        })
      ).json()
      return sessionId
    }
  }
}

export default apiSettings
