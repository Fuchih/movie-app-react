import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  padding: 0 20px;
  background: var(--darkGray);
`

const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--maxWidth);
  margin: 0 auto;

  .column {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
    border-radius: 20px;
    flex: 1;

    :first-child {
      margin-left: 0;
    }

    :last-child {
      margin-right: 0;
    }
  }

  @media (max-width: 768px) {
    display: block;

    .column {
      margin: 20px 0;
    }
  }
`

export { Wrapper, Content }
