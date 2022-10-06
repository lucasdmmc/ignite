import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'
import logoImage from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImage} alt="" />
      <nav>
        <NavLink to="/home" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
