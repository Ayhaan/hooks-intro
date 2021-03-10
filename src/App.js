import React, {useState} from 'react'
import Article from './components/Article'
import Personnage from './components/Personnage'

export default function App() {
  // state donnée personnage
  const [data, setData] = useState({
    prenom: "ayhan",
    nom: "caliskan",
    age: 23,
    commune: "anderlecht"
  })
  //fonction rename
  let rename = () => {
    setData({
      prenom:"Elias",
      nom: "Raname",
      age: 25,
      commune : "molengeek"
    })
  }
  //deuxième state
  const [article] = useState([
    {marque:"audi", model: "a6"},
    {marque:"bmw", model: "m3"},
    {marque:"audi", model: "a4"},
    {marque:"bmw", model: "m5"},
    {marque:"audi", model: "a3"},
  ])
  return (
    <div>
      <Personnage ayhan={data} rename={rename}/>
      
      {/* boucle sur article*/}
      {article.map( (el, i) => {
        return <Article key={i} donnee={el}/>
      })}
    </div>
  )
}
