import styles from "./Button.module.css"
import { PlusCircle } from "phosphor-react"

interface ButtonProps {
  onClick: () => void
}

export function Button({onClick}: ButtonProps) {
  return (
    <button onClick={onClick} type="button" className={styles.button}>
      <strong>Criar</strong>
      <PlusCircle size={16} />
    </button>
  )
}