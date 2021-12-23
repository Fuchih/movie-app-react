import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 20px;
  background: var(--darkGray);
`

const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: var(--maxWidth);
  height: 55px;
  margin: 0 auto;
  border-radius: 40px;
  background: var(--medGray);
  color: var(--white);

  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;
  }

  input {
    position: absolute;
    left: 0;
    width: 95%;
    height: 40px;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    background: transparent;
    font-size: var(--fontLarge);
    color: var(--white);

    :focus {
      outline: none;
    }
  }
`

export { Wrapper, Content }
