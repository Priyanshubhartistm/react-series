import React from 'react'
import './App.css'

function App () {

  function handleClick () {
    alert('button clicked')

  }

  function handleMouseOver () {
    alert('paragraph hovered')
  }

  function handleInputChange(){
    console.log("Input field changed")
    
  }

  return (
    <div>

    <form>
      <input type="text" onChange={handleInputChange} style={{width:"200px", height:"30px", margin:"20px", padding:"5px"}} placeholder="Type something..." />
    </form>
    
      {/* <p onMouseOver={handleMouseOver} style={{color:"red", border:"2px solid black", width:"100px", textAlign:"center", margin:"auto", padding:"10px"}}> 
        Hello World!
      </p>



      <button onClick={handleClick}>
        click me
      </button> */}
    </div>


  )
}

export default App
