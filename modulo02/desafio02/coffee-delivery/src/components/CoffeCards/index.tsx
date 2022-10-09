import { Cards, ChooseHowMuchCoffes, CoffeeCardsContainer, MoreOrLess, Cart } from "./styles";
import traditionalCoffee from "../../assets/coffecards/expresso-tradicional.svg"
import whiteCart from "../../assets/white-cart.svg"
import {Plus, Minus} from "phosphor-react"

export function CoffeCards() {
  return(
    <CoffeeCardsContainer>
      <strong>Nossos cafés</strong>

      <Cards>
        <header>
          <img src={traditionalCoffee} alt="" />
        </header>

        <main>
          <span>Tradicional</span>
          <strong>Expresso Tradicional</strong>
          <p>O tradicional café feito com água quente e grãos moídos</p>
        </main>

        <footer>
          <span>R$:</span>
          <ChooseHowMuchCoffes>
            <MoreOrLess>
              <button><Minus /></button>
              <span>1</span>
              <button><Plus /></button>
            </MoreOrLess>
              <Cart>
                <button>
                  <img src={whiteCart} alt="" />
                </button>
              </Cart>
          </ChooseHowMuchCoffes>
        </footer>
      </Cards>
    </CoffeeCardsContainer>
  )
}