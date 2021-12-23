import React from 'react'
import Logo from '../../images/react-movie-logo.svg'
import TMBDLogo from '../../images/tmdb_logo.svg'
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles'

export default function Header() {
  return (
    <Wrapper>
      <Content>
        <LogoImg src={Logo} alt="logo" />
        <TMDBLogoImg src={TMBDLogo} alt="TMBDLogo" />
      </Content>
    </Wrapper>
  )
}
