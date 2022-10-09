import { HeaderContainer, LocalizationAndCart } from "./styles";
import logoCoffee from "../../assets/coffeDelivery-logo.svg"
import localization from '../../assets/localization.svg'
import cart from "../../assets/cart.svg"

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="Logo do Coffee Delivery" />

      
      <LocalizationAndCart>
        <ul>
          <li>
            <img src={localization}/>
              Uibaí, BA
          </li>
        </ul>

        <button type="button">
          <img src={cart}/>
        </button>
      </LocalizationAndCart>
    </HeaderContainer>
  )
}