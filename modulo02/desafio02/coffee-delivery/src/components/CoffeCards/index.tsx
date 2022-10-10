import { Cards, ChooseHowMuchCoffes, CoffeeCardsContainer, MoreOrLess, Cart } from "./styles";
import whiteCart from "../../assets/white-cart.svg"
import {Plus, Minus} from "phosphor-react"

interface CoffeeCardsProps {
  coffeeType: string;
  title: string;
  description: string
  src: string;
}

export function CoffeCards({ coffeeType, title, description, src }: CoffeeCardsProps) {
  return(
    <CoffeeCardsContainer>

      <Cards>
        <header>
          <img src={src} alt="" />
        </header>

        <main>
          <span >
            {coffeeType}
          </span>
          <strong>{title}</strong>
          <p>{description}</p>
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