import React from 'react'
import './App.css'

import profile from './assets/birb.jpg'
import TechList from './components/TechList'

function App() {
  return (
    <>
      <img src={profile} alt="birb" />
      <h1>Hello Rocketseast</h1>
      <TechList />
    </>
  )
}

export default App;