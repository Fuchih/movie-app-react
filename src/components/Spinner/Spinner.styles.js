import styled from 'styled-components'

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  margin: 20px auto;
  border: 5px solid var(--lightGray);
  border-top: 5px solid var(--medGray);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export { Spinner }
