import { HeaderContainer } from './styles'
import logoImg from '../../assets/logo.svg'
import imgleft from '../../assets/headerphotoleft.png'
import imgRight from '../../assets/headerphotoright.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={imgleft} alt="" />
      <div>
        <img src={logoImg} alt="" />
        <span>Github Blog</span>
      </div>
      <img src={imgRight} alt="" />
    </HeaderContainer>
  )
}
