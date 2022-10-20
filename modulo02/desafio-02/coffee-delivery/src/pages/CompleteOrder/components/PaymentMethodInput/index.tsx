import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { PaymentMethodContainer, ContentContainer } from "./styles";

type PaymentMethodInputPros = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

// export function PaymentMethodInput ({ id, icon, label, ...props  }: PaymentMethodInputPros) {
//   return (
//     <PaymentMethodContainer>
//       <input id={id} type="radio" {...props} name="paymentMethod" />
//       <label htmlFor={id}>
//         <ContentContainer>
//           {icon}
//           {label}
//         </ContentContainer>
//       </label>
//     </PaymentMethodContainer>
//   )
// }

export const PaymentMethodInput = forwardRef<HTMLInputElement, PaymentMethodInputPros>(
  ({id, icon, label, ...props }, ref) => {
  return (
    <PaymentMethodContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodContainer>
  )
})