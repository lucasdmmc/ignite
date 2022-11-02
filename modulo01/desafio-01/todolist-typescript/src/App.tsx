import { useState, useEffect } from "react"
import styles from "./App.module.css"
import { Button } from "./components/Button/Button"
import { Header } from "./components/Header/Header"
import { InfoTasks } from "./components/InfoTasks/InfoTasks"
import { Input } from "./components/Input/Input"
import { NoTask } from "./components/NoTask/NoTask"

interface NewArrayProps {
  finished: boolean;
  description: string;
}
 
export function App() {
  const [tasks, setTasks] = useState<Array<NewArrayProps>>([])
  const [newTasks, setNewTasks] = useState({} as NewArrayProps)

  const [finishedTaskCount, setFinishedTaskCount] = useState(0)

  function handleTaskChange(value: string) {
    setNewTasks({description: value, finished: false})
  }

  
  function handleAddTask() {
    if(tasks.length == 5) return alert("Você adicionou o máximo de tarefas possíveis!")
    
    if(newTasks.description == "") return
    setTasks([...tasks, newTasks])
    
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
  }, [tasks])

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.containerInputAndButton}>

        <Input 
          value={newTasks.description}
          setOnChange={handleTaskChange}
        />

        <Button 
          onClick={handleAddTask}
        />
      </div>

      <InfoTasks 
        totalCreatedTasks={tasks.length}
        totalFinsihedTasks={finishedTaskCount}

      />

      <main>
        <NoTask
          key={String(newTasks.description)}
          tasks={tasks}
          onChangeStatus={changeStatus}
          onRemoveTask={removeTask}
        />
      </main>
    </div>
  )
}

