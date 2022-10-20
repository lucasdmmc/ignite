import { Button } from "../../../../components/Button";
import { RegularText, TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hook/useCart";
import { FormatMoney } from "../../../../utils/FormatMoney";
import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart()
  
  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedItemsTotal = FormatMoney(cartItemsTotal)
  const formattedCartTotal = FormatMoney(cartTotal)
  const formattedDeliveryPrice = FormatMoney(DELIVERY_PRICE)
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de items</RegularText>
        <RegularText>R$ {formattedItemsTotal}</RegularText>
      </div>

      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formattedDeliveryPrice}</RegularText>
      </div>

      <div>
        <RegularText weight="700" color="subtitle" size="l">Total</RegularText>
        <RegularText weight="700" color="subtitle" size="l" >
          R$ {formattedCartTotal}   
        </RegularText>
      </div>

      <Button 
        text="Confirmar Pedido" 
        disabled={cartQuantity <= 0}
        type="submit"
      />
    </ConfirmationSectionContainer>
  )
}