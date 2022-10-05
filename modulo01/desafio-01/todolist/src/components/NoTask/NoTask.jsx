import { Tasks } from "../Tasks/Tasks"
import styles from "./NoTask.module.css"

export function NoTask({ 
  tasks, 
  onChangeStatus, 
  onRemoveTask,
 }) {
  
  function changeStatus() {
    onChangeStatus()
  }

  function removeTask() {
    onRemoveTask()
  }

  return (
    <>
    {tasks.length === 0 && <div className={styles.noTask}>
      <img src="../../../public/clipboard.svg" alt="" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
    }

    {tasks.map((task, index) => (
      <Tasks
        key={String(task)}
        onChangeStatus={changeStatus}
        onRemoveTask={removeTask}
        task={task}
        statusTask={task.finished}
        index={index}
      />
    ))}
    </>

  )
}