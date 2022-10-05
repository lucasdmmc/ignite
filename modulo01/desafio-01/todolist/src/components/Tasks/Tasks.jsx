import { Trash } from "phosphor-react"
import styles from "./Tasks.module.css"

export function Tasks({ 
  task, 
  onRemoveTask, 
  onChangeStatus,
  index,
  statusTask,
  }) {
  function handleChangeStatus() {
    onChangeStatus()
  }
  
  function handleRemoveTask() {
    onRemoveTask()
  }
  
  return(
    
    <div className={styles.container}>
      <div className={styles.checkboxAndTask}>
        <div className={styles.checkbox}>
          <input onClick={()=> handleChangeStatus(statusTask, index)} type="checkbox"/>
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