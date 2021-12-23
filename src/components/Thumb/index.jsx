import { Image } from './Thumb.styles'

export default function Thumb({ image, movieId, clickable, title }) {
  return (
    <>
      <Image src={image} alt="movie-thumb" title={title}/>
    </>
  )
}
