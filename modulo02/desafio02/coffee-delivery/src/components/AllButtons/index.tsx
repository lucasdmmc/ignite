import { ButtonContainer } from '../Button/styles'
import creditCard from '../../assets/CheckoutImages/creditcard.svg'
import debitCard from '../../assets/CheckoutImages/debitcard.svg'
import cash from '../../assets/CheckoutImages/cash.svg'
import { Button } from '../Button/Button'

export function AllButtons() {
  const buttons = [
    {
      id: 1,
      src: creditCard,
      content: 'Credit Card',
    },
    {
      id: 2,
      src: debitCard,
      content: 'Debit Card',
    },
    {
      id: 3,
      src: cash,
      content: 'Cash',
    },
  ]
  return (
    <ButtonContainer>
      {buttons.map((button) => (
        <Button
          key={String(button.id)}
          id={button.id}
          src={button.src}
          content={button.content}
        />
      ))}
    </ButtonContainer>
  )
}
