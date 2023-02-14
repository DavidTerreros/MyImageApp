import { useState } from 'react'
import './App.css'
import FirstApp from './components/FirstApp'
import HelloWorld from './components/HelloWorld'

function App() {
  const [count, setCount] = useState(0)

  const incrementCounter = () => setCount(count + 1)
  const decrementCounter = () => setCount(count - 1)
  
  return (
    <div className="App">

      <FirstApp/>
      {/* <h3 className='mystyle'>My Counter App</h3>
      <HelloWorld message="Anthony" />
      <p>{count}</p>
      <button onClick={decrementCounter}>-</button>
      <button onClick={incrementCounter}>+</button> */}
    </div>
  )
}

export default App
