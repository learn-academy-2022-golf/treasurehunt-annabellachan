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

  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length))
  // create random number from board length 


  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length))


  const handleGamePlay = (index) => {
    let updatedBoard = [...board]
    // ... spread operator creates a copy of the biard so that we can modify a single instance insinde the array
    if(index === treasureLocation) {
      // if you index is equal to treasure location
      // updatiung a single instance of the copied array to treasure emoji
      updatedBoard[index] = "🍖"
      // console.log(updatedBoard) setting entire updated board to state
      setBoard(updatedBoard)
      // invokes the function instead of using console.log
    }else if(index === bombLocation) {
      updatedBoard[index] = "👿"
      setBoard(updatedBoard)
    }else {
      updatedBoard[index] = "🐶"
      setBoard(updatedBoard)
    }
   

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
