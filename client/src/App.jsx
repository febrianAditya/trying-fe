import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  useEffect(() => {
    hitApi()
  }, [])

  const hitApi = async () => {
    try {
      const dataUser = await fetch("http://13.210.70.81/")
      const result = await dataUser.json()
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h3>Febrian Aditya</h3>
    </>
  )
}

export default App
