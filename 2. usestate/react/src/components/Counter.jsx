import React from 'react'
import './Counter.css'

const Counter = () => {
  const [count, setCount] = React.useState(22)
  return (
    <div className='Counter-container'>
      <p id='para'>you have clicked {count} times</p>
      <button id='btn' onClick={() => {setCount(count + 1)}}>Click me</button>
    </div>
  )
}


export default Counter
