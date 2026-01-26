import React from 'react'
import './App.css'

function App () {

  function handleClick () {
    alert('button clicked')

  }

  function handleMouseOver () {
    alert('paragraph hovered')
  }

  function handleInputChange(e){
    // console.log("Input field changed")
    console.log("value till now:", e.target.value);

  }

  function handlesubmit(e){
    e.preventDefault();
    console.log("form submitted")
  }

  return (
    <div>

      <button onClick={() => alert("button click me")}>Click me</button>

    <form onSubmit={handlesubmit}>
      <input type="text" onChange={handleInputChange}  />
      <button type='submit'>submit</button>
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
