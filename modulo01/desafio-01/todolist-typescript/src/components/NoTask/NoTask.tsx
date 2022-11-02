import { Tasks } from "../Tasks/Tasks"
import styles from "./NoTask.module.css"

interface NewArrayProps {
  finished: boolean;
  description: string;
}

interface NoTaskProps {
  tasks: Array<NewArrayProps>
  onChangeStatus: (statusTask: boolean, index: number) => void 
  onRemoveTask: (index: number) => void
}


export function NoTask({ tasks, onChangeStatus, onRemoveTask }: NoTaskProps) {
  
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
        key={String(task.description)}
        onChangeStatus={onChangeStatus}
        onRemoveTask={onRemoveTask}
        statusTask={task.finished}
        task={task}
        index={index}
      />
    ))}
    </>

  )
}