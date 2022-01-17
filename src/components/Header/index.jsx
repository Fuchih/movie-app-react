import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/react-movie-logo.svg'
import TMBDLogo from '../../images/tmdb_logo.svg'
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles'
import { Context } from '../../context'

export default function Header() {
  const [user] = useContext(Context)

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={Logo} alt="logo" />
        </Link>
        {user ? (
          <span>Logged in as : {user.username}</span>
        ) : (
          <Link to="/login">
            <span className="login">Login</span>
          </Link>
        )}
        <TMDBLogoImg src={TMBDLogo} alt="TMBDLogo" />
      </Content>
    </Wrapper>
  )
}
