import React, { useState } from "react"
import Square from './components/Square'
import "./App.css"


const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const handleGamePlay = (index) => {
    let updatedBoard = [...board]
    // ... spread operator creates a copy of the state variable board
    updatedBoard[index] = "🎄"
    // console.log(updatedBoard)
    setBoard(updatedBoard)
    // invokes the function instead of using console.log

  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="gameboard">
        {board.map((value, index) => {
          return (
          <Square 
            value={value} 
            key={index} 
            index={index}
            // passing index as props to square component 
            handleGamePlay={handleGamePlay}
            // call on it and pass as props
            
          />
         )
       })}
     </div>
      
    </>
  )
}

export default App
