import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

const App: React.FC = () => {
  return (
    <div className='bg-white'>
      <Navbar />
      <HeroSection />
    </div>
  )
}

export default App