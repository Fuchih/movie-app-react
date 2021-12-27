import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config'
import { useHomeFetch } from '../../hooks/useHomeFetch'
import Banner from '../Banner'
import NoImage from '../../images/no_image.jpg'
import Grid from '../Grid'
import Thumb from '../Thumb'
import Spinner from '../Spinner'
import SearchBar from '../SearchBar'
import Button from '../Button'

export default function Home() {
  const { movieData, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useHomeFetch()

  if (error) return <div>Oops! Something went wrong ... try again later!</div> // 請求出錯時 返回此數據避免App崩潰

  return (
    <>
      {movieData.results[0] ? ( // 非同步任務 加載完成後再渲染UI
        <Banner // 初始為目前最紅的電影 or 搜尋項目裡最紅的電影
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movieData.results[0].backdrop_path}`}
          title={movieData.results[0].original_title}
          text={movieData.results[0].overview}
        />
      ) : null}

      {/* useHomeFetch <--> Home <--> SearchBar */}
      <SearchBar setSearchTerm={setSearchTerm} />

      {/* 依目前為初始畫面或搜尋畫面顯示相對應描述 */}
      <Grid header={searchTerm ? 'Search Results' : 'Popular Movies'}>
        {movieData.results.map((movie) => (
          // 遍歷所有已請求電影資料
          <Thumb
            key={movie.id}
            clickable
            image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage} // TMDB冷門電影可能缺少圖片，使用NoImage代替
            movieId={movie.id}
            title={movie.title}
          />
        ))}
      </Grid>

      {/* 加載時出現加載動畫 */}
      {loading && <Spinner />}

      { // 目前頁面數小於總頁面數且不處於Loading狀態時加載按鈕可用
        movieData.page < movieData.total_pages
        && !loading
        && <Button text="Load More" callback={() => setIsLoadingMore(true)}></Button>
      }

    </>
  )
}
