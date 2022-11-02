import { PlusCircle } from "phosphor-react"
import { useState, useEffect } from "react"
import styles from "./App.module.css"
import { Header } from "./components/Header/Header"
import { InfoTasks } from "./components/InfoTasks/InfoTasks"
import { NoTask } from "./components/NoTask/NoTask"
 
export function App() {
  const [tasks, setTasks] = useState([])
  const [newTasks, setNewTasks] = useState([])

  const [createdTaskCount, setCreatedTaskCount] = useState(0)
  const [finishedTaskCount, setFinishedTaskCount] = useState(0)

  function handleTaskChange(event) {
    setNewTasks(event.target.value)
  }

  
  function handleAddTask() {
    if(newTasks == "") return
    if(createdTaskCount === 5) return alert("Você adicionou o máximo de tarefas possíveis!")
    
    setTasks([...tasks, newTasks])
    // setFinishedTaskCount({description: "", finished: false})
    setNewTasks("")
    
    setCreatedTaskCount(prevState => prevState +1)
  }
  
  function changeStatus(index) {
    let copyTasks = [...tasks]
    let copyTask = {...copyTasks[index]}

    copyTask = statusTask
    copyTasks[index] = copyTask
    
    setTasks(copyTasks)
    console.log(copyTask)
  }

  function removeTask(index) {
    let copyTasks = [...tasks]

    let isDeleted = confirm("Tem certeza que deseja deletar a tarefa?")

    if(isDeleted) {
      copyTasks.splice(index, 1)
      setTasks(copyTasks)
    }
  }

  useEffect(() => {
    // const totalFinishedCount = tasks.filter(task => task.finished)
    // setFinshedTaskCount(totalFinishedCount.length)

    const totalFinishedCount = tasks.filter(task => task[finished])
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
          value={newTasks}
          onChange={handleTaskChange}
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

