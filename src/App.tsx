import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import PerformanceSection from './components/PerformanceSection'
import FuctionalitySection from './components/FuctionalitySection'

const App: React.FC = () => {
  return (
    <div className='bg-white'>
      <Navbar />
      <div className='pt-16'>
        <HeroSection />
        <PerformanceSection />
        <FuctionalitySection />
      </div>
    </div>
  )
}

export default App