import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  height: 600px;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${({ image }) => image}), var(--darkGray);
  background-size: 100%, cover;
  background-position: center;
  animation: animationBanner 1s;
  @keyframes animationBanner {
    /* 初次或重新渲染Banner時fading out */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 20px;
`

const Text = styled.div`
  z-index: 100;
  position: absolute;
  bottom: 40px;
  max-width: 700px;
  min-height: 100px;
  margin-right: 20px;
  color: var(--white);

  h1 {
    font-size: var(--fontXLarge);
    @media (max-width: 720px) {
      font-size: var(--fontLarge);
    }
  }

  p {
    font-size: var(--fontMed)
    @media (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }

  @media (max-width: 720px) {
    max-width: 100%
  }
`

export { Wrapper, Content, Text }
