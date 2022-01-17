import styled from 'styled-components'

const Wrapper = styled.button`
  display: block;
  width: 70px;
  margin-top: 20px;
  border-radius: 30px;
  outline: none;
  background: var(--white);
  font-size: var(--fontSmall);
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`

export { Wrapper }
