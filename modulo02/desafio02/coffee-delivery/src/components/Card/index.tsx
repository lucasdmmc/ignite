import { ChooseHowMuchCoffes, MoreOrLess, Cart, CoffeeCard } from './styles'
import whiteCart from '../../assets/white-cart.svg'
import { Plus, Minus } from 'phosphor-react'

interface CoffeeCardProps {
  id: number
  coffee?: string
  otherTaste?: string
  taste?: string
  src: string
  title: string
  description: string
}

export function Card({
  id,
  coffee,
  otherTaste,
  taste,
  src,
  title,
  description,
}: CoffeeCardProps) {
  return (
    <CoffeeCard>
      <header>
        <img src={src} alt="" />
      </header>

      <main>
        <div className="typesCoffee">
          <span>{coffee}</span>
          {otherTaste && <span>{otherTaste}</span>}
          {taste && <span>{taste}</span>}
        </div>
        <strong>{title}</strong>
        <p>{description}</p>
      </main>

      <footer>
        <span>R$:</span>
        <ChooseHowMuchCoffes>
          <MoreOrLess>
            <button>
              <Minus />
            </button>
            <span>1</span>
            <button>
              <Plus />
            </button>
          </MoreOrLess>
          <Cart>
            <button>
              <img src={whiteCart} alt="" />
            </button>
          </Cart>
        </ChooseHowMuchCoffes>
      </footer>
    </CoffeeCard>
  )
}
