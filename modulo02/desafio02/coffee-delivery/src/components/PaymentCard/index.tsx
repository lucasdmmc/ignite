import coffeeOne from '../../assets/CheckoutImages/coffee1.svg'
import coffeeTwo from '../../assets/CheckoutImages/coffee2.svg'
import { Payment } from '../Payment'

export function PaymentCard() {
  const payments = [
    {
      id: 1,
      price: 'R$ 9,90',
      title: 'Tradicional Expresso',
      src: coffeeOne,
    },
    {
      id: 2,
      price: 'R$ 19,80',
      title: 'Latte',
      src: coffeeTwo,
    },
  ]
  return (
    <>
      {payments.map((payment) => (
        <Payment
          key={String(payment.id)}
          id={payment.id}
          price={payment.price}
          title={payment.title}
          src={payment.src}
        />
      ))}
    </>
  )
}
