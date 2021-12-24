import { Image } from './Thumb.styles'
import { Link } from 'react-router-dom'

export default function Thumb({ image, movieId, clickable, title }) {
  return (
    <>
      {clickable ? ( // 點擊後進入相對應頁面
        <Link to={`/${movieId}`}>
          <Image src={image} alt="movie-thumb" title={title} />
        </Link>
      ) : (
        <Image src={image} alt="movie-thumb" title={title} />
      )}
    </>
  )
}
