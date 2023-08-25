import { useState } from 'react'
import './App.css'

function App() {

 let[counter, setCounter] = useState(10)
  
  function addnum(){
    if (counter < 20) {
      counter = counter + 1
      setCounter(counter)
    }
  }
  
  function removenum(){
    if (counter > 0) {
      counter = counter - 1
      setCounter(counter)
    }
  }

  return (
    <>
     <h1>You are on the counter</h1>
     <h2>counter : {counter}</h2>
     <button onClick={addnum}>ADD</button>
     <br />
     <button onClick={removenum}>REMOVE</button>
    </>
  )
  }

export default App
