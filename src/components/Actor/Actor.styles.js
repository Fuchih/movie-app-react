import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 5px;
  border-radius: 20px;
  background: var(--darkGray);
  text-align: center;
  color: var(--white);

  h3 {
    margin: 10px 0 0 0;
  }

  p {
    margin: 5px 0;
  }
`

const Image = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  border-radius: 15px
  object-fit: cover;
`

export { Wrapper, Image }
