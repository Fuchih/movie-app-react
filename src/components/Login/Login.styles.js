import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 320px;
  margin: 0 auto;
  padding: 20px;
  color: var(--darkGray);

  input {
    width: 100%;
    height: 30px;
    border: 1px solid var(--darkGray);
    border-radius: 20px;
    margin: 10px 0;
    padding: 10px;
  }

  .error {
    margin-bottom: 20px;
    color: red;
  }
`

export { Wrapper }
