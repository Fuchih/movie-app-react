import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 0 20px;
  background: var(--darkGray);
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 20px 0;
  color: var(--white);

  a {
    text-decoration: none;
    color: var(--white);
  }

  .login {
    padding: 10px 20px;
    border: 1px solid;
    border-radius: 5px;
  }
`

const LogoImg = styled.img`
  width: 200px;

  @media (max-width: 500px) {
    width: 150px;
  }
`

const TMDBLogoImg = styled.img`
  width: 100px;

  @media (max-width: 500px) {
    width: 80px;
  }
`

export { Wrapper, Content, LogoImg, TMDBLogoImg }
