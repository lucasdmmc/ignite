import { TitleText } from "../../../../components/Typography";
import { SectionTitle } from "../SectionTitle";
import { CompletedOrderFormContainer, FormSectionContainer } from "./styles";
import { MapPinLine } from "phosphor-react";
import { useTheme } from "styled-components";

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
      </FormSectionContainer>
    </CompletedOrderFormContainer>
  )
}