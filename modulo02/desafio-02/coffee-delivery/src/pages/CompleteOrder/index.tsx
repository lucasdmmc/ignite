import { CompleteOrderForm } from "./components/CompleteOderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CompletedOrderContainer } from "./styles";
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hook/useCart";

enum PaymentMethod {
  credit = "credit",
  debit = "debit",
  money = "money"
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe a rua"),
  number: zod.string().min(1, "Informe o número"),
  complement: zod.string(),
  distric: zod.string().min(1, "Informe o bairro"),
  city: zod.string().min(1, "Informe a cidade"),
  uf: zod.string().min(1, "Informe a UF"),
  paymentMethod: zod.nativeEnum(PaymentMethod, {
    errorMap: () => {
      return { message: "Informe o método de pagamento!" }
    }
  })
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export function CompleteOrderPage() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema)
  })

  const { handleSubmit } = confirmOrderForm
  const { cleanCart } = useCart()

  const navigate = useNavigate()

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate("/ordercompleted", {
      state: data
    })
    cleanCart()
    
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CompletedOrderContainer 
        className="container" 
        onSubmit={handleSubmit(handleConfirmOrder)}>
        <CompleteOrderForm />
        <SelectedCoffees />
      </CompletedOrderContainer>
    </FormProvider>
  )
}