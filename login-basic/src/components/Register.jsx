import React, { useState } from 'react'
import Axios from 'axios'

export default function Register() {

    const [account, setAccount] = useState()

    const handleSubmit = (e) => {
      e.preventDefault()
    }
    
    const handleChange = (e) => {
      setAccount( (prev) => ({
        ...prev,
        [e.target.name] : e.target.value,      
      }))
  }
    
    const handleClick = () => {
      Axios.post("http://127.0.0.1:5174/register", 
      {
        username: account.username,
        password: account.password,
      }).then((response) => {
        console.log(response)
      })
      alert("Usuário cadastrado com sucesso!")
    }
  
  
    return (
      <div className="container register--container">
        <form onSubmit={handleSubmit}>
          <h1>Cadastro</h1>
          <input type="text" name="username" placeholder= "Usuário" onChange={handleChange}/>
          <input type="text" name="password" placeholder= "Senha" onChange={handleChange}/>
          <button onClick={handleClick}>Cadastrar</button>
        </form>
      </div>
    )
}
