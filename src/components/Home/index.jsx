import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config'
import { useHomeFetch } from '../../hooks/useHomeFetch'
import Banner from '../Banner'
import NoImage from '../../images/no_image.jpg'
import Grid from '../Grid'
import Thumb from '../Thumb'
import Spinner from '../Spinner'
import SearchBar from '../SearchBar'

export default function Home() {
  const { state, loading, error, setSearchTerm } = useHomeFetch()

  return (
    <>
      {state.page > 0 && ( // 非同步任務 加載完成後再渲染UI
        <>
          <Banner // 初始為目前最紅的電影 or 搜尋項目裡最紅的電影
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
            title={state.results[0].original_title}
            text={state.results[0].overview}
          />
          <SearchBar setSearchTerm={setSearchTerm} /> {/* useHomeFetch <--> Home <--> SearchBar */}
          <Grid header="Popular Movies">
            {state.results.map((movie) => (
              <Thumb key={movie.id} clickable image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage} movieId={movie.id} />
            ))}
          </Grid>
          <Spinner />
        </>
      )}
    </>
  )
}
