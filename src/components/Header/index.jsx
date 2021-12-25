import { Link } from 'react-router-dom'
import Logo from '../../images/react-movie-logo.svg'
import TMBDLogo from '../../images/tmdb_logo.svg'
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles'

export default function Header() {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={Logo} alt="logo" />
        </Link>
        <TMDBLogoImg src={TMBDLogo} alt="TMBDLogo" />
      </Content>
    </Wrapper>
  )
}
