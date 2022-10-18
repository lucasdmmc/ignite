import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";
import coffeImg from "../../../../assets/coffee1.svg"
import { RegularText } from "../../../../components/Typography";
import { QuantityInput } from "../../../../components/QuantityInput";
import { Trash } from "phosphor-react";
import { CartItem } from "../../../../contexts/CartContext";
import { FormatMoney } from "../../../../utils/FormatMoney";
import { useCart } from "../../../../hook/useCart";

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCartCard ({ coffee }: CoffeeCartCardProps) {
  const {changeCartItemQuantity, removeCartItem} = useCart()
  const coffeeTotal = coffee.price * coffee.quantity
  const formatedPrice = FormatMoney(coffeeTotal)


  function handleIncrease() {
    changeCartItemQuantity(coffee.id, "increase")
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, "decrease")
  }

  function handleRemoveCartItem() {
    removeCartItem(coffee.id)
  }


  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} alt="" />
        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <ActionsContainer>
            <QuantityInput 
              size="small" 
              quantity={coffee.quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <RemoveButton onClick={handleRemoveCartItem}>
              <Trash size={16}/>
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
        <p>{formatedPrice}</p>

    </CoffeeCartCardContainer>
  )
}