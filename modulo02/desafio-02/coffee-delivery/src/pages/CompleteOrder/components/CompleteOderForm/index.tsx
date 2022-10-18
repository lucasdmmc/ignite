import { TitleText } from "../../../../components/Typography";
import { SectionTitle } from "../SectionTitle";
import { CompletedOrderFormContainer, FormSectionContainer } from "./styles";
import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { useTheme } from "styled-components";
import { AdressForm } from "./AdressForm";
import { PaymentMethodOptions } from "./PaymentMethodOptions";

export function CompleteOrderForm() {
  const { colors } = useTheme()
  return (
    <CompletedOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>

      <FormSectionContainer>
        <SectionTitle 
          title="Endereço de entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine color={colors["brand-yellow-dark"]} size={22} weight="fill"/>}
        />

        <AdressForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitle 
          title="Pagamente"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar color={colors["brand-purple"]} size={22} weight="fill"/>}
        />
        <PaymentMethodOptions />
      </FormSectionContainer>
    </CompletedOrderFormContainer>
  )
}