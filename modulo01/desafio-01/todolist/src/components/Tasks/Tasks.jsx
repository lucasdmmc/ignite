import { Trash } from "phosphor-react"
import styles from "./Tasks.module.css"

export function Tasks({ 
  task, 
  onCheckboxChecked, 
  onRemoveTask, 
  onChangeStatus,
  statusTask,
  index
  }) {

  function handleCheckboxChecked() {
    onCheckboxChecked()
  }

  function handleRemoveTask() {
    onRemoveTask()
  }

  function handleChangeStatus() {
    onChangeStatus()
  }

  return(
    <div className={styles.container}>
      <div className={styles.checkboxAndTask}>
        <div className={styles.checkbox}>
          <input onClick={() => handleCheckboxChecked(statusTask, index)} type="checkbox"/>
          <label htmlFor=""></label>

        </div>
        <span className={`${task ? styles.checkboxChecked : ""}`}>{task}</span>
      </div>

      <button onClick={handleRemoveTask} className={styles.trash} type="button">
        <Trash size={24}/>
      </button>

    </div>
  )
}