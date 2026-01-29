import React from 'react'
import { useEffect,useState } from 'react'


function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);

  // first = side effect function
  // second = cleanup function
  // third = dependency array, comma separated dep list

  // variation:1
  // runs on evey render
  // useEffect(() => {
  //   alert("I wil never run on each render")
  // })

  // variation:2
  // that runs on only first render
  // useEffect(() => {
  //   alert("I will run only once on first render")
  // }, [])

  // variation:3
  // runs on first render and when count changes
  // useEffect(() => {
  //   alert(`Count has changed to ${count}`);
  // }, [count])

  // variation:4
  // runs on first render and when count changes
  // with cleanup function
  useEffect(() => {
    alert(`Count has changed to ${count}`);

  }, [count])

  function handleClick() {
    setCount(count+1);
    setTotal(total+1);
  }
  function handleClickTotal() {
  }


  return (
    <div>
      <button onClick={handleClick}>update count</button>
      <br/>
      Count is {count}


      <br/>
      <button onClick={handleClickTotal}>update count</button>
      <br/>
      Total is {total}
      
    </div>
  )
}

export default App
