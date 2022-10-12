/* eslint-disable jsx-a11y/alt-text */
import { HeaderContainer, LocalizationAndCart } from './styles'
import { Link } from 'react-router-dom'
import logoCoffee from '../../assets/coffeDelivery-logo.svg'
import localization from '../../assets/localization.svg'
import cart from '../../assets/cart.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="Logo do Coffee Delivery" />

      <LocalizationAndCart>
        <ul>
          <li>
            <img src={localization} />
            Uibaí, BA
          </li>
        </ul>

        <Link to={'/checkout'}>
          <button type="button">
            <img src={cart} />
          </button>
        </Link>
      </LocalizationAndCart>
    </HeaderContainer>
  )
}
