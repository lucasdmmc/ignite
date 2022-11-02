import { ButtonContainer } from './styles'

interface ButtonProps {
  id: number
  src: string
  content: string
}

export function Button({ id, src, content }: ButtonProps) {
  return (
    <>
      <ButtonContainer>
        <button type="button">
          <img src={src} alt="" />
          {content}
        </button>
      </ButtonContainer>
    </>
  )
}
