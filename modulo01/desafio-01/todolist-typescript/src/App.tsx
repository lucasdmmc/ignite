import { PlusCircle } from "phosphor-react"
import { useState, useEffect } from "react"
import styles from "./App.module.css"
import { Header } from "./components/Header/Header"
import { InfoTasks } from "./components/InfoTasks/InfoTasks"
import { NoTask } from "./components/NoTask/NoTask"

interface NewArrayProps {
  finished: boolean;
  description: string;
}
 
export function App() {
  const [tasks, setTasks] = useState<Array<NewArrayProps>>([])
  const [newTasks, setNewTasks] = useState({} as NewArrayProps)

  const [createdTaskCount, setCreatedTaskCount] = useState(0)
  const [finishedTaskCount, setFinishedTaskCount] = useState(0)

  function handleTaskChange(value: string) {
    setNewTasks({description: value, finished: false})
  }

  
  function handleAddTask() {
    if(createdTaskCount === 5) return alert("Você adicionou o máximo de tarefas possíveis!")
    
    if(!newTasks?.description || newTasks.description == "") return
    setTasks([...tasks, newTasks])
    
    setCreatedTaskCount(prevState => prevState +1)
    setNewTasks({description: "", finished: false})
  }
  
  function changeStatus(statusTask: boolean, index: number) {
    let copyTasks = [...tasks]
    let copyTask = {...copyTasks[index]}

    copyTask.finished = statusTask
    copyTasks[index] = copyTask
    
    setTasks(copyTasks)
    console.log(copyTask)
  }

  function removeTask(index: number) {
    let copyTasks = [...tasks]

    if(copyTasks[index].finished == false) {
      return alert("Você ainda não terminou a tarefa!")
    }

    copyTasks.splice(index, 1)
    setTasks(copyTasks)

  }

  useEffect(() => {
    const totalFinishedCount = tasks.filter(task => task.finished)
    setFinishedTaskCount(totalFinishedCount.length)

    const totalCreatedCount = tasks.filter(task => task)
    setCreatedTaskCount(totalCreatedCount.length)
  }, [tasks])

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.containerInputAndButton}>

        <input
          className={styles.input} 
          value={newTasks.description}
          onChange={(e) => handleTaskChange(e.target.value)}
          placeholder="Adicione uma nova tarefa"
          type="text" 
        />

        <button 
          className={styles.button}
          onClick={handleAddTask}
        >
          <strong>Criar</strong>
          <PlusCircle />
        </button>
      </div>

      <InfoTasks 
        totalCreatedTasks={createdTaskCount}
        totalFinsihedTasks={finishedTaskCount}

      />

      <main>
        <NoTask
          key={String(newTasks)}
          tasks={tasks}
          onChangeStatus={changeStatus}
          onRemoveTask={removeTask}
        />
      </main>
    </div>
  )
}

