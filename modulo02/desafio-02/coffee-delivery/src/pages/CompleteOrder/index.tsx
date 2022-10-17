import { CompleteOrderForm } from "./components/CompleteOderForm";
import { CompletedOrderContainer } from "./styles";

export function CompleteOrderPage() {
  return (
    <CompletedOrderContainer className="container">

      <CompleteOrderForm />
    </CompletedOrderContainer>
  )
}