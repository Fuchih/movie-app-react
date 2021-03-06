import { useParams } from 'react-router-dom'
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config'
import Grid from '../Grid'
import Spinner from '../Spinner'
import { useMovieFetch } from '../../hooks/useMovieFetch'
import NoImage from '../../images/no_image.jpg'
import BreadCrumb from '../BreadCrumb'
import MovieInfo from '../MovieInfo'
import MovieInfoBar from '../MovieInfoBar'
import Actor from '../Actor'

export default function Movie() {
  const { movieId } = useParams() // <Route path="/:movieId" element={<Movie />} /> 取得動態參數:movieId
  const { state: movie, loading, error } = useMovieFetch(movieId) // 解構後重新命名State為movie

  if (loading) return <Spinner /> // 加載時出現加載動畫
  if (error) return <div>Oops! Something went wrong ... try again later!</div> // 請求出錯時 返回此數據避免App崩潰

  return (
    <>
      <BreadCrumb movieTitle={movie.title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
      <Grid header="Actors">
        {movie.actors.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage}
          />
        ))}
      </Grid>
    </>
  )
}
