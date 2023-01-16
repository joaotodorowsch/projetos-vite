import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {

  const [task, setTask] = useState('')
  const [time, setTime] = useState('')
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
    .then((response) => {
      console.log(response)
    })
  }
  

  return (
    <div className="App">
      <form>
        <fieldset>
          <legend>Adicionar Tarefa</legend>
          <div className="wrapper">
            <label htmlFor="task">Tarefa: </label>
            <input className="form--input" onChange={handleChangeTask} type="text" name="task" id="task" placeholder="Nome da Tarefa"/>
          </div>

          <div className="wrapper">
            <label htmlFor="time">Horário: </label>
            <input className="form--input" onChange={handleChangeTime} type="time" name="time" id="time"/>
          </div>

          <button onClick={handleClick}>Adicionar</button>

        </fieldset>
      </form>

      <div className="list--wrapper">
        <div className="list--container">
          
          <ul>
            <li className='list--checkbox'><input type="checkbox" name="done" id="done" /></li>
            <li className='list--task'>Tarefa</li>
            <li className='list--time'>Horario</li>
            <li className='list--delete'>X</li>
            {typeof taskList !== "undefined" && 
            taskList.map((item) => {
              <>
              <li className='list--checkbox'><input type="checkbox" name="done" id="done" /></li>
              <li className='list--task'>{item.task}</li>
              <li className='list--time'>{item.time}</li>
              <li className='list--delete'>X</li>
             </> 

          })}
            
          </ul>

        </div>
      </div>
    </div>
      

  )
}

export default App
