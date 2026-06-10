import { useState } from 'react'
import Navbar from "./components/navbar/Navbar"
import Expanse from "./components/expansecontent/Expanse"


function App() {
  return (
    <div className='bg-gray-600'>
    <Navbar/>
    <Expanse/>
    </div>
  )
}

export default App
