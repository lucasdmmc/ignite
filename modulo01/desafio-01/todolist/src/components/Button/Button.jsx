import styles from "./Button.module.css"
import { PlusCircle } from "phosphor-react"


export function Button() {
  return (
    <button type="button" className={styles.button}>
      <strong>Criar</strong>
      <PlusCircle size={16} />
    </button>
  )
}