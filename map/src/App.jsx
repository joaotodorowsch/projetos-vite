import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'




function App() {

  const users = [
  {
    name: 'Carlos',
    address: 'Rua X',
    age: 28,
    isAdmin: false,
  },
  {
    name: 'Maria',
    address: 'Rua XX',
    age: 31,
    isAdmin: true,
  },
  {
    name: 'Matheus',
    address: 'Rua XI',
    age: 22,
    isAdmin: false,
  },
]


  return (
    <div>{users.map((user) => (
      <div>{user.name}, {user.age}</div>
    ))}
    </div>
    )
}

export default App
