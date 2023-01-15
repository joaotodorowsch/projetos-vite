import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((res => res.json()))
      .then((data => {
        
        const sortedArray = [...data.results]
        sortedArray.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
        
        
        setPokemonList(sortedArray)}))
  }, [])

  return (
    <div>
      {pokemonList.map((item) => 
      <Pokemon data={item}/>)}
    </div>
  )
}

const Pokemon = ({ data }) => {
  const [details, setDetails] = useState(null)

  useEffect(() => {
    fetch(data.url)
    .then((res => res.json()))
    .then((data => setDetails(data)))
  }, [])


  if(details === null){
    return <div>carregando...</div>
  }
  return <div style={{display: 'flex', alignItems: 'center'}}>
    <img src={details.sprites.front_default} style={{width: 30, marginRight: 20}}/>
    <span><b>{details.name}</b>- EXP {details.base_experience}</span>
    </div>
}

export default App
