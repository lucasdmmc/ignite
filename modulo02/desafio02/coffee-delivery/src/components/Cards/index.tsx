import coffeeCard1 from '../../assets/coffecards/coffeeCard1.svg'
import coffeeCard2 from '../../assets/coffecards/coffeeCard2.svg'
import coffeeCard3 from '../../assets/coffecards/coffeeCard3.svg'
import coffeeCard4 from '../../assets/coffecards/coffeeCard4.svg'
import coffeeCard5 from '../../assets/coffecards/coffeeCard5.svg'
import coffeeCard6 from '../../assets/coffecards/coffeeCard6.svg'
import coffeeCard7 from '../../assets/coffecards/coffeeCard7.svg'
import coffeeCard8 from '../../assets/coffecards/coffeeCard8.svg'
import { CoffeeCards, CoffeeCardsContainer } from './styles'
import { Card } from '../Card'

export function Cards() {
  const cards = [
    {
      id: 1,
      coffee: 'Tradicional',
      src: coffeeCard1,
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
    },
    {
      id: 2,
      coffee: 'Tradicional',
      src: coffeeCard2,
      title: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
    },
    {
      id: 3,
      coffee: 'Tradicional',
      src: coffeeCard3,
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
    },
    {
      id: 4,
      coffee: 'Tradicional',
      src: coffeeCard4,
      cold: true,
      title: 'Expresso Tradicional',
      description: 'Bebida preparada com café expresso e cubos de gelo',
    },
  ]
  return (
    <CoffeeCardsContainer>
      <CoffeeCards>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            cold={card.cold}
            coffee={card.coffee}
            src={card.src}
            title={card.title}
            description={card.description}
          />
        ))}
      </CoffeeCards>
    </CoffeeCardsContainer>
  )
}
