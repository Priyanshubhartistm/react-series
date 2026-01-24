import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  // create state here
  // manage the state here
  // change the state here
  // sabhi child me state ko sync karwadunga

  const[name, setName] = useState('');


  return (
    <div>
      <Card name={name} setName={setName} />
      <Card name={name} setName={setName} />

      
      {/* <p>I am inside parent component and value of NAME IS {name}</p> */}
    </div>
  )
}

export default App
