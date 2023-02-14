import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CounterApp from './components/CounterApp'
import './index.css'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CounterApp value={1100}/>
)
