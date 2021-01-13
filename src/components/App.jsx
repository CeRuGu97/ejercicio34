import React, {useState} from 'react'

const App = () => {
  const [ count , setCount] = useState(0)

  const handleClick = () =>{
    setCount(count +1)
  }

  return (
    <div className="container">
      <h4>Hello world</h4>
      <span>{count}</span>
      <button onClick={handleClick}>Aumentar</button>
    </div>
  )
}

export default App
