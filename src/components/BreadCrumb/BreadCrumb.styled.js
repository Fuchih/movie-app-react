import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  background: var(--medGray);
  color: var(--white);
`

const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--maxWidth);
  padding: 0 20px;

  span {
    padding-right: 10px;
    font-size: var(--fontMed);
    color: var(--white);

    @media (max-width: 768px) {
      font-size: var(--fontSmall);
    }
  }
`

export { Wrapper, Content }
