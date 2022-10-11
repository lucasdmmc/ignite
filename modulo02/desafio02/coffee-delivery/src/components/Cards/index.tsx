import coffeeCard1 from '../../assets/coffecards/coffeeCard1.svg'
import coffeeCard2 from '../../assets/coffecards/coffeeCard2.svg'
import coffeeCard3 from '../../assets/coffecards/coffeeCard3.svg'
import coffeeCard4 from '../../assets/coffecards/coffeeCard4.svg'
import coffeeCard5 from '../../assets/coffecards/coffeeCard5.svg'
import coffeeCard6 from '../../assets/coffecards/coffeeCard6.svg'
import coffeeCard7 from '../../assets/coffecards/coffeeCard7.svg'
import coffeeCard8 from '../../assets/coffecards/coffeeCard8.svg'
import coffeeCard9 from '../../assets/coffecards/coffeeCard9.svg'
import coffeeCard10 from '../../assets/coffecards/coffeeCard10.svg'
import coffeeCard11 from '../../assets/coffecards/coffeeCard11.svg'
import coffeeCard12 from '../../assets/coffecards/coffeeCard12.svg'
import coffeeCard13 from '../../assets/coffecards/coffeeCard13.svg'
import coffeeCard14 from '../../assets/coffecards/coffeeCard14.svg'
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
      title: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
    },
    {
      id: 4,
      coffee: 'Tradicional',
      otherTaste: 'Gelado',
      src: coffeeCard4,
      title: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
    },
    {
      id: 5,
      coffee: 'Tradicional',
      otherTaste: 'Com leite',
      src: coffeeCard5,
      title: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
    },
    {
      id: 6,
      coffee: 'Tradicional',
      otherTaste: 'Com leite',
      src: coffeeCard6,
      title: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    },
    {
      id: 7,
      coffee: 'Tradicional',
      otherTaste: 'Com leite',
      src: coffeeCard7,
      title: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
    },
    {
      id: 8,
      coffee: 'Tradicional',
      otherTaste: 'Com leite',
      src: coffeeCard8,
      title: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
    },
    {
      id: 9,
      coffee: 'Tradicional',
      otherTaste: 'Com leite',
      src: coffeeCard9,
      title: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    },
    {
      id: 10,
      coffee: 'Tradicional',
      otherTaste: 'Com leite',
      src: coffeeCard10,
      title: 'Chocolate Quente',
      description: 'Bebida preparada com café expresso e cubos de gelo',
    },
    {
      id: 11,
      coffee: 'Espicial',
      otherTaste: 'Alcoólico',
      taste: 'Gelado',
      src: coffeeCard11,
      title: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
    },
    {
      id: 12,
      coffee: 'Espicial',
      src: coffeeCard12,
      title: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
    },
    {
      id: 13,
      coffee: 'Espicial',
      src: coffeeCard13,
      title: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
    },
    {
      id: 14,
      otherTaste: 'Alcoólico',
      src: coffeeCard14,
      title: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    },
  ]
  return (
    <CoffeeCardsContainer>
      <CoffeeCards>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            otherTaste={card.otherTaste}
            taste={card.taste}
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
