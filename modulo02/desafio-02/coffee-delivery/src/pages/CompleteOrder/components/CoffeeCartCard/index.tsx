import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";
import coffeImg from "../../../../assets/coffee1.svg"
import { RegularText } from "../../../../components/Typography";
import { QuantityInput } from "../../../../components/QuantityInput";
import { Trash } from "phosphor-react";
export function CoffeeCartCard () {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={coffeImg} alt="" />
        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput size="small"/>
            <RemoveButton>
              <Trash size={16}/>
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
        <p>R$ 9,90</p>

    </CoffeeCartCardContainer>
  )
}