import styles from "./Header.module.css"
import { Rocket } from "phosphor-react"

export function Header() {
  return (
    <header className={styles.header}>
      <img src="/src/assets/rocket.svg" alt="" />
      <h1>To<span>do</span></h1>
    </header>
  )
}