import { useEffect, useState } from 'react'
import Axios from 'axios'

export default function Login() {

  const [loginData, setLoginData] = useState({username: "", password:""})


  const handleClick = () => {
    
    let allAccounts = []
    Axios
      .get("http://127.0.0.1:5174/getData")
      .then((response)   => {
        const check = response.data.filter((account) => account.username == loginData.username)
        if(check[0].password == loginData.password){
          alert("Autenticado com sucesso!")
        } else {
          alert("Senha incorreta!")
        }
      })
  }

  const handleChange = (e) => {
    setLoginData( (prev) => ({
      ...prev,
      [e.target.name] : e.target.value,      
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="container login--container">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input type="text" name="username" placeholder= "Usuário" onChange={handleChange}/>
        <input type="password" name="password" placeholder= "Senha" onChange={handleChange}/>
        <button onClick={handleClick}>Logar</button>
      </form>
    </div>
  )
}
