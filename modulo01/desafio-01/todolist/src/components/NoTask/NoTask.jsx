import { Tasks } from "../Tasks/Tasks"
import styles from "./NoTask.module.css"

export function NoTask({ 
  tasks, 
  onCheckboxChecked, 
  onRemoveTask, 
  onChangeStatus,
 }) {

  function checkboxChecked() {
    onCheckboxChecked()
  }

  function removeTask() {
    onRemoveTask()
  }

  function changeStatus(){
    onChangeStatus()
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
        onCheckboxChecked={checkboxChecked}
        onRemoveTask={removeTask}
        onChangeStatus={changeStatus}
        task={task}
        index={index}
        statusTask={task}
      />
    ))}
    </>

  )
}