import './App.css'


function App() {

  return (
    <div className="App">
      <form>
        <fieldset>
          <legend>Adicionar Tarefa</legend>
          <div className="wrapper">
            <label htmlFor="task">Tarefa: </label>
            <input type="text" name="task" id="task"/>
          </div>

          <div className="wrapper">
            <label htmlFor="time">Horário: </label>
            <input type="time" name="time" id="time"/>
          </div>

          <div className="wrapper">
            <label htmlFor="date">Dia: </label>
            <input type="date" name="date" id="date"/>
          </div>

          <button>Adicionar</button>

        </fieldset>
      </form>
    </div>
  )
}

export default App
