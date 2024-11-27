import { useState } from 'react'
import './App.css'
import { LandingPage } from './components/zest/landing-page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LandingPage />      
    </>
  )
}

export default App
