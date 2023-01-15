import { SetStateAction, useState } from 'react'
import reactLogo from './assets/react.svg'
import CSS from 'csstype'
import './App.css'

function App() {
  const [list, setList] = useState([])


  const handleClick = (e: any) => {
    const newDot = {
      clientX: e.clientX,
      clientY: e.clientY,
    }
    setList((prev) => [...prev, newDot])
  }

  const handleUndo = (event) => {
    event.stopPropagation()

    if(list.length === 0){
      return
    }

    
    setList((prev) => {
      const newArr = [...prev].slice(0, -1)
      return newArr
    })
  }

  return (
    <div className={"board"} onClick={handleClick}>
      <button onClick={handleUndo}>Desfazer</button>
      {list.map((item, index) => (
        <span 
        className={"dot"}
        style={{left: item.clientX, top: item.clientY}}
        key={index}
        />
      ))}
    </div>
  )
}

export default App
