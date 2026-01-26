import React from 'react'
import { useEffect } from 'react'


function App() {

  useEffect(() => {
    console.log('Component mounted')

    return () => {
      console.log('Component will unmount')
    }
  }, [])
   

  return (
    <div>
      hello
    </div>
  )
}

export default App
