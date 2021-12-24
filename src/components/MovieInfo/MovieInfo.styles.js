import styled from 'styled-components'
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config'

const Wrapper = styled.div`
  padding: 40px 20px;
  background: ${({ backdrop }) => (backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : `#000`)};
  background-size: cover;
  background-position: center;
  animation: animateMovieInfo 1s;

  @keyframes {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    display: block;
    max-height: none;
  }
`

const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;

  .rating-directors {
    display: flex;
    justify-content: flex-start;
  }

  .score {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    margin: 0 auto;
    border-radius: 50%;
    background: var(--white);
    font-weight: 800;
    color: #000;
  }

  .director {
    margin: 0 0 0 40px;

    p {
      margin: 0 auto;
    }
  }

  h1 {
    @media (max-width: 768px) {
      font-size: var(--fontLarge);
    }
  }
`

export { Wrapper, Content, Text }
