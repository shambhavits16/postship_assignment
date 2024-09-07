import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'

const App: React.FC = () => {
  return (
    <div className='bg-white'>
      <Navbar />
      <Card />
    </div>
  )
}

export default App