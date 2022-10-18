import { CompleteOrderForm } from "./components/CompleteOderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CompletedOrderContainer } from "./styles";

export function CompleteOrderPage() {
  return (
    <CompletedOrderContainer className="container">
      <CompleteOrderForm />
      <SelectedCoffees />
    </CompletedOrderContainer>
  )
}