import styles from "./InfoTasks.module.css"

export function InfoTasks({ totalCreatedTasks, totalFinsihedTasks }) {
  return(
    <div className={styles.container}>
      <div className={styles.created}>
        <strong>Tarefas Criadas</strong>
        <span>{totalCreatedTasks}</span>
      </div>

      <div className={styles.done}>
        <strong>Concluidas</strong>
        <span>{`${totalFinsihedTasks} de ${totalCreatedTasks}`}</span>
      </div>
    </div>
  )
}