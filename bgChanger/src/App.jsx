import { useState } from "react"
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >Red</button>
          <button
            onClick={() => setColor("green")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >Green</button>
          <button
            onClick={() => setColor("blue")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >Blue</button>
          <button
            onClick={() => setColor("pink")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
          >pink</button>
          <button
            onClick={() => setColor("black")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black", color: "white" }}
          >black</button>
          <button
            onClick={() => setColor("white")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "white", color: "black" }}
          >white</button>
          <button
            onClick={() => setColor("orange")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
          >orange</button>
          <button
            onClick={() => setColor("brown")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "brown" }}
          >Brown</button>
          <button
            onClick={() => setColor("yellow")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >Yellow</button>
          <button
            onClick={() => setColor("azure")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "azure", color: "black" }}
          >Azure</button>
          <button
            onClick={() => setColor("indigo")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "indigo" }}
          >Indigo</button>
          <button
            onClick={() => setColor("violet")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "violet" }}
          >violet</button>
          <button
            onClick={() => setColor("grey")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "grey" }}
          >grey</button>
          <button
            onClick={() => setColor("magenta")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "magenta" }}
          >magenta</button>
          <button
            onClick={() => setColor("maroon")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "maroon" }}
          >maroon</button>
          <button
            onClick={() => setColor("cyan")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "cyan" }}
          >cyan</button>
          <button
            onClick={() => setColor("tan")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "tan" }}
          >tan</button>
          <button
            onClick={() => setColor("teal")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "teal" }}
          >teal</button>
        </div>
      </div>
    </div>
  )
}

export default App