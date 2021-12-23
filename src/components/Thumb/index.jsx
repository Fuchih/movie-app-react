import { Image } from './Thumb.styles'

export default function Thumb({ image, movieId, clickable }) {
  return (
    <>
      <Image src={image} alt="movie-thumb" />
    </>
  )
}
