import { Header } from '../../components/Header'
import { InfoCoffeeDelivery } from '../../components/InfoCoffeeDelivery'
import coffeeMain from '../../assets/coffeeMain.png'
import {
  MainContainer,
  SectionContainer,
  Title,
  Coffees,
  CardsContainer,
} from './styles'
import { AllCoffeeCards } from '../../components/AllCoffeeCards'

export function Home() {
  return (
    <>
      <Header />
      <MainContainer>
        <SectionContainer>
          <div>
            <Title>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </Title>

            <InfoCoffeeDelivery />
          </div>

          <img src={coffeeMain} alt="" />
        </SectionContainer>

        <Coffees>
          <strong>Nossos cafés</strong>

          <CardsContainer>
            <AllCoffeeCards />
          </CardsContainer>
        </Coffees>
      </MainContainer>
    </>
  )
}
