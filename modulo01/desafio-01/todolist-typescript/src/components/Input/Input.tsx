import styles from "./Input.module.css"

interface InputProps {
  value: string;
  setOnChange: (value: string) => void
}

export function Input({value, setOnChange}: InputProps) {

  return (
      <input
        value={value}
        className={styles.input}
        onChange={(e) => setOnChange(e.target.value)}
        type="text" 
        placeholder="Adicione uma nova tarefa" 
      />
  )
}