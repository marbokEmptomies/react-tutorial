import React from 'react';
import {useState} from 'react'
import './App.css'
import Nappain from './Nappain'

let nappaimet = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", "=", "C", "CE"]

const App = () => {
  
  const [teksti, setTeksti] = useState("")

  const nappainPainettu = (x) => {

    if (x==="CE"){
      let newText = teksti.slice(0, -1)
      console.log(newText)
      setTeksti(newText)
    }

    if (x==="=" ){
      setTeksti(eval(teksti))
      return 
    }

    if (x==="C"){
      setTeksti("")
      return
    }
    
    if((teksti.length) > 8){
        setTeksti("")
        return
    }else return setTeksti(teksti+x)
  }

  return (
    <div className="calc-container">
        <p className="screen-container">{teksti}</p>
      <div className="grid-container">
        {nappaimet.map((nappain, index)=>
          <div className="grid-item"><Nappain key={index} nappainPainettu={nappainPainettu} nappain={nappain} /></div>)}
      </div>
    </div>
  )
}

export default App;