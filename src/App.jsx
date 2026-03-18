import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Obituary from './components/Obituary'
import Events from './components/Events'
import Tributes from './components/Tributes'
import MemorialWall from './components/MemorialWall'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <main>
        <Obituary />
        <Events />
        <Tributes />
        <MemorialWall />
      </main>
      <Footer />
    </div>
  )
}

export default App
