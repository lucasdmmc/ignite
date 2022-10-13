import { Container } from './styles'
import { Minus, Plus, Trash } from 'phosphor-react'

interface PaymentCardProps {
  id: number
  price: string
  title: string
  src: string
}

export function Payment({ id, title, src, price }: PaymentCardProps) {
  return (
    <Container>
      <div className="infoConfirmPayment">
        <div className="coffeeOneContainer">
          <div className="coffeeOne">
            <img src={src} alt="" />
            <div className="information">
              <span>{title}</span>
              <div className="buttonsContainer">
                <div className="moreOrLess">
                  <button>
                    <Minus />
                  </button>
                  <span>1</span>
                  <button>
                    <Plus />
                  </button>
                </div>

                <button className="trash">
                  <Trash />
                  Remover
                </button>
              </div>
            </div>
          </div>
          <span>{price}</span>
        </div>
      </div>
    </Container>
  )
}
