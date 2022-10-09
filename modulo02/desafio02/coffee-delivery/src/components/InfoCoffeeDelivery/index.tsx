import { 
  InfoCoffeeDeliveryContainer,
  InfoOne, 
  InfoTwo, 
  InfoThree,
  InfoFour, 
  InfoOneContainer, 
  InfoTwoContainer } from "./styles";
import whiteCart from "../../assets/white-cart.svg"
import box from "../../assets/box.svg"
import time from "../../assets/time.svg"
import coffee from "../../assets/coffee.svg"

export function InfoCoffeeDelivery() {
  return (
    <InfoCoffeeDeliveryContainer>
      <InfoOneContainer>
        <InfoOne>
          <img src={whiteCart} alt="" />
          <span>Compra simples e segura</span>
        </InfoOne>

        <InfoTwo>
          <img src={box} alt="" />
          <span>Embalagem mantém o café intacto</span>
        </InfoTwo>
      </InfoOneContainer>

      <InfoTwoContainer>
        <InfoThree>
          <img src={time} alt="" />
          <span>Entrega rápida e rastreada</span>
        </InfoThree>

        <InfoFour>
          <img src={coffee} alt="" />
          <span>O café chega fresquinho até você</span>
        </InfoFour>
      </InfoTwoContainer>
    </InfoCoffeeDeliveryContainer>
  )
}