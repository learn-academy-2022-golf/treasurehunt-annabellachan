import React from "react"

const Square = (props) => {
  // console.log(props.index) checks index is working
  const handleClick = () => {
    // alert(props.index)
    props.handleGamePlay(props.index)
    // invokes handleGamePlay and passes (props.index) as an argument
  }

  return (
    <>
      <div className="square" onClick={handleClick}>{props.value}</div>
      {/* on click invokes a function */}
      {/* handleclick naming convention */}
    </>
  )
}
export default Square
