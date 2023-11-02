import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './component/Card'
function App() {
  let myObj = {
    username: "nisha",
    age: 34
  }
  let newArr = [1, 2, 3];
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Taliwind css</h1>
      {/* <Card channel="chai" someObj={myObj} myArr={newArr} /> */}
      {/* <Card username="nisha" btnText="click me" /> */}
      <Card username="nisha" />

      <h1 className="bg-green-600 p-4">hello</h1>
    </>
  )
}

export default App
