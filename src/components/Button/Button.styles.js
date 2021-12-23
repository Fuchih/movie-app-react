import styled from 'styled-components'

const Wrapper = styled.button`
  display: block;
  width: 25%;
  min-width: 200px;
  height: 60px;
  margin: 20px auto;
  border-radius: 30px;
  outline: none;
  background: var(--darkGray);
  font-size: var(--fontLarge);
  color: var(--white);
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    opacity: 0.8
  }
`

export { Wrapper }
