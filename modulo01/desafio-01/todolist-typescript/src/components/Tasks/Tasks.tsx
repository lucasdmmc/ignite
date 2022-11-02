import { Trash } from "phosphor-react"
import styles from "./Tasks.module.css"

interface InfoTask {
  finished: boolean;
  description: string;
}

interface TasksProps {
  task: InfoTask;
  index: number;
  statusTask: boolean;
  onChangeStatus: (statusTask: boolean, index: number) => void 
  onRemoveTask: (index: number) => void
}

export function Tasks({ task, index, statusTask, onChangeStatus, onRemoveTask }: TasksProps) {
  
  return(
    
    <div className={styles.container}>
      <div className={styles.checkboxAndTask}>
        <div className={styles.checkbox}>
          <input onClick={()=> onChangeStatus(!statusTask, index)} type="checkbox"/>
          <label htmlFor=""></label>

        </div>
        <span 
          className={`${task.finished ? styles.checkboxChecked : ""}`}>
          {task.description}
        </span>
      </div>

      <button onClick={() => onRemoveTask(index)} className={styles.trash} type="button">
        <Trash size={24}/>
      </button>

    </div>
  )
}