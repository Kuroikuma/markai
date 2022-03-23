import './css/App.css'
import { Home } from './container/home'
import React from 'react'
import { Robot } from './components/robot'
import { Feature } from './components/feature'
import { Video } from './components/video'
import { Services } from './components/services'
import { Card } from './components/card'

export function App() {
  return (
    <div className="App">
      <Home />
      <Robot />
      <Feature />
      <Video />
      <Services />
      <Card />
    </div>
  )
}
