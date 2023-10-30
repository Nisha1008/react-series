import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(1);
  const addVal = () => {
    // counter = counter + 1

    console.log("added", counter);
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)

    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }
  const remVal = () => {
    // counter = counter - 1
    console.log("removed", counter);
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>chai or react</h1>
      <h2>Counter value  :{counter}</h2>

      <button onClick={addVal}
      >Add value</button>
      <br />
      <button onClick={remVal}
      >Remove value</button>
    </>
  )
}

export default App
