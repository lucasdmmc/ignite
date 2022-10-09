import { Header } from "../../components/Header";
import { InfoCoffeeDelivery } from "../../components/InfoCoffeeDelivery";
import { MainContainer, SectionContainer, Title } from "./styles";
import coffeeMain from "../../assets/coffeeMain.png"
import { CoffeCards } from "../../components/CoffeCards";


export function Home() {
  return (
    <>
    <Header />
    <MainContainer>

      <SectionContainer>
        <div>
        <Title>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
        </Title>

        <InfoCoffeeDelivery />
        </div>

        <img src={coffeeMain} alt="" />
      </SectionContainer>

      <CoffeCards />
    </MainContainer>
    </>
  )
}