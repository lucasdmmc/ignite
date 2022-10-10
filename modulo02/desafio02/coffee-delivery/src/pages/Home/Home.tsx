import { Header } from "../../components/Header";
import { InfoCoffeeDelivery } from "../../components/InfoCoffeeDelivery";
import { MainContainer, SectionContainer, Title, Coffees, CardsContainer } from "./styles";
import coffeeMain from "../../assets/coffeeMain.png"
import { CoffeCards } from "../../components/CoffeCards";

import traditionalCoffee from "../../assets/coffecards/expresso-tradicional.svg"
import americanTraditional from "../../assets/coffecards/expresso-americano.svg"
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

      <Coffees>
        <strong>Nossos cafés</strong> 

        <CardsContainer>
          <CoffeCards 
            coffeeType="Tradicional"
            src={traditionalCoffee}
            title="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"  
          />
          <CoffeCards
            coffeeType="Tradicional"
            src={americanTraditional}
            title="Expresso Americano"
            description="Expresso diluído, menos intenso que o tradicional"
          />
          
        </CardsContainer>  

      </Coffees>
    </MainContainer>
    </>
  )
}