import styles from "./Input.module.css"

export function Input(value) {

  return (
      <input
        value={value}
        className={styles.input} 
        type="text" 
        placeholder="Adicione uma nova tarefa" 
      />
  )
}