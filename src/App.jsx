import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Background3D from './components/Background3D'
import './App.css'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      <Background3D />
      <Navigation />
      <main>
        <Hero />
        <Education />
        <Certifications />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
