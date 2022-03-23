import './css/App.css'
import { Home } from './container/home'
import React from 'react'
import { Robot } from './components/robot'

export function App() {
  return (
    <div className="App">
      <Home />
      <Robot />
    </div>
  )
}
