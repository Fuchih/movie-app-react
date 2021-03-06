import { useState, useEffect, useCallback } from 'react'
import { isPersistedState } from '../helper'
import API from '../API'

function useMovieFetch(movieId) {
  const [state, setState] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchMovie = useCallback(async () => {
    // 如果將fetchMovie抽離useEffect，必須使用useCallback，否則會陷入無限迴圈
    try {
      setLoading(true) // 請求開始
      setError(false)

      const movie = await API.fetchMovie(movieId)
      const credit = await API.fetchCredits(movieId)
      const directors = credit.crew.filter((member) => member.job === 'Director')

      setState({
        //展開後建立所需要的電影資料供Movie組件使用
        ...movie,
        actors: credit.cast,
        directors
      })

      setLoading(false) // 請求結束
    } catch (error) {
      setError(true)
    }

    // 將讀取後的數據保存到sessionStorage，不用再重複讀取數據
    const sessionState = isPersistedState(movieId)

    if (sessionState) {
      setState(sessionState)
      setLoading(false)
      return
    }
  }, [movieId])

  useEffect(() => {
    fetchMovie()
  }, [movieId, fetchMovie])

  useEffect(() => {
    // 將讀取後的數據保存到sessionStorage，不用再重複讀取數據
    sessionStorage.setItem(movieId, JSON.stringify(state))
  }, [movieId, state])

  return { state, loading, error }
}

export { useMovieFetch }
