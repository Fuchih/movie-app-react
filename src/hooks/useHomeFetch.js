import { useState, useEffect } from 'react'
import API from '../API'

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0
}

export function useHomeFetch() {
  const [searchTerm, setSearchTerm] = useState('') // 搜尋
  const [state, setState] = useState(initialState) // 電影資料
  const [loading, setLoading] = useState(false) // 讀取
  const [error, setError] = useState(false) // 錯誤
  const [isLoadingMore, setIsLoadingMore] = useState(false) // 是否更多電影需要加載

  useEffect(() => {
    // 初次請求資料 & 搜尋
    setState(initialState)
    fetchMovies(1, searchTerm)
  }, [searchTerm])

  useEffect(() => {
    //加載更多電影
    if (!isLoadingMore) return

    fetchMovies(state.page + 1, searchTerm)
    setIsLoadingMore(false) // 加載完後必需設回false，否則會持續加載
  }, [isLoadingMore, searchTerm, state.page])

  const fetchMovies = async (page, searchTerm = '') => {
    try {
      setError(false)
      setLoading(true) // 請求完成前

      const movies = await API.fetchMovies(searchTerm, page)
      setState((pre) => ({
        ...movies,
        results: page > 1 ? [...pre.results, ...movies.results] : [...movies.results] // 若資料超過一頁
      }))
    } catch (error) {
      setError(true) // 錯誤發生時
    }

    setLoading(false) // 請求完成後
  }

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore }
}
