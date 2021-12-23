import styled from 'styled-components'

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  border-radius: 20px;
  object-fit: cover;
  animation: animateThumb 0.5s;
  @keyframes animateThumb {
    /* 初次或重新渲染Banner時fading out */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  :hover {
    opacity: 0.7;
  }
`
