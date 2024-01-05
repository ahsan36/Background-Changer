// import './App.css'

import { useState } from "react"

function App() {

  const [color, setColor] = useState("");

  let handleOnClick = (color) => {
    setColor(color);
  }

  return (

    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>

      <div className="fixed flex flex-wrap justify-center
      bottom-12 inset-x-0 px-2">

        <div className="flex flex-wrap justify-center
        gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <button className="outline-none px-4 py-1 rounded-full
          text-white shadow-lg"
          style={{backgroundColor: "red"}} 
          onClick={() => handleOnClick("red")}>Red</button>

          <button className="outline-none px-4 py-1 rounded-full
          text-white shadow-lg"
          style={{backgroundColor: "green"}}
          onClick={() => handleOnClick("green")}>Green</button>

          <button className="outline-none px-4 py-1 rounded-full
          text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          onClick={() => handleOnClick("blue")}>Blue</button>

          <button className="outline-none px-4 py-1 rounded-full
          text-white shadow-lg"
          style={{backgroundColor: "yellow", color:"black"}}
          onClick={() => handleOnClick("yellow")}>Yellow</button>

          <button className="outline-none px-4 py-1 rounded-full
          text-white shadow-lg"
          style={{backgroundColor: "black"}}
          onClick={() => handleOnClick("black")}>Black</button>

          <button className="outline-none px-4 py-1 rounded-full
          text-white shadow-lg"
          style={{backgroundColor: "pink", color:"black"}}
          onClick={() => handleOnClick("pink")}>Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
