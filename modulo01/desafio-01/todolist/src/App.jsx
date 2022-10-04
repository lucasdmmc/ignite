import { PlusCircle } from "phosphor-react"
import { useState, useEffect } from "react"
import styles from "./App.module.css"
import { Header } from "./components/Header/Header"
import { InfoTasks } from "./components/InfoTasks/InfoTasks"
import { NoTask } from "./components/NoTask/NoTask"

export function App({ finished, description }) {
  const [tasks, setTasks] = useState([])
  const [newTasks, setNewTasks] = useState([])

  const [createdTaskCount, setCreatedTaskCount] = useState(0)
  const [finishedTaskCount, setFinshedTaskCount] = useState(0)

  function handleTaskChange(event) {
    setNewTasks(event.target.value)
  }
  
  function handleAddTask() {
    if(newTasks == "") return
    if(createdTaskCount === 5) return alert("Você adicionou o máximo de tarefas possíveis!")
    
    setTasks([...tasks, newTasks])
    setNewTasks({description: "", finished: false})
    setNewTasks("")
    
    setCreatedTaskCount(prevState => prevState +1)
  }
  
  function checkboxChecked(status, index) {
    let copyTasks = [...tasks]
    let copyTask = {...copyTasks[index]}
    // setFinshedTaskCount(prevState => prevState +1)
    
    copyTask = status
    copyTasks[index] = copyTask
    
    setTasks(copyTasks)
  }

  function removeTask(index) {
    let copyTasks = [...tasks]

    let isDeleted = confirm("Tem certeza que deseja deletar a tarefa?")

    if(isDeleted) {
      copyTasks.splice(index, 1)
      setTasks(copyTasks)
    }
  }

  function changeStatus(status, index) {
    let copyTasks = [...tasks]
    let copyTask = {...copyTasks[index]}

    copyTask.finished = status
    copyTasks[index] = copyTask

    setTasks(copyTasks)
  }

  useEffect(() => {
    const totalFinishedCount = tasks.filter(task => task.finished)
    setFinshedTaskCount(totalFinishedCount.length)

    const totalCreatedCount = tasks.filter(task => task)
    setCreatedTaskCount(totalCreatedCount.length)

  }, [tasks])

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.containerInputAndButton}>

        <input
          value={newTasks}
          onChange={handleTaskChange}
          className={styles.input} 
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
          onCheckboxChecked={checkboxChecked}
          onRemoveTask={removeTask}
          onChangeStatus={changeStatus}
        />
      </main>
    </div>
  )
}

