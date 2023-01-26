import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Task from './components/task/task'


function App() {

  const [task, setTask] = useState('')
  const [time, setTime] = useState()
  const [taskList, setTaskList] = useState([{
    task: '',
    time: ''
  }])

  const handleChangeTask = (e) => {
    setTask(e.target.value)
  }

  const handleChangeTime = (e) => {
    setTime(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    axios.post('http://127.0.0.1:5174/', 
    {
      task: task,
      time: time,
    })
    .then(() => {
      axios.post("http://127.0.0.1:5174/search", {
        task: task,
        time: time,
      })   
      .then((response) => {
        setTaskList(() => [
          ...taskList, 
          {
            id: response.data[0].id,
            task: task,
            time: time,
          }]
        )
      })
    })
    setTask('')
    setTime('')
  }
  
  // Lista

  useEffect(() => {
    axios.get('http://127.0.0.1:5174/getData')
    .then((response) => {
      setTaskList(response.data)
    })
  }, [])

  return (
    <div className="App">
      <form>
        <fieldset>
          <legend>Adicionar Tarefa</legend>
          <div className="wrapper">
            <label htmlFor="task">Tarefa: </label>
            <input value={task}className="form--input" onChange={handleChangeTask} type="text" name="task" id="task" placeholder="Nome da Tarefa" required/>
          </div>

          <div className="wrapper">
            <label htmlFor="time">Horário: </label>
            <input value={time} className="form--input" onChange={handleChangeTime} type="time" name="time" id="time" required/>
          </div>

          <button onClick={handleClick}>Adicionar</button>

        </fieldset>
      </form>

      <div className="list--wrapper">
        <div className="list--container">
          
          <ul className='list--first'>
            <li className='list--task'>Tarefa</li>
            <li className='list--time'>Horario</li>
          </ul>
            {typeof taskList !== "undefined" && 
            taskList.map((item) => {
              return (
              <Task 
                key={`${item.id}.task`} 
                taskList={taskList} 
                setTaskList={setTaskList}
                id={item.id}
                task={item.task}
                time={item.time}
                data={item.data} 
                />
              )
          })}

        </div>
      </div>
    </div>
      

  )
}

export default App
