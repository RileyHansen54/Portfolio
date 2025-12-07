import { useState, useEffect } from 'react'
import './Navigation.css'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ['hero', 'education', 'certifications', 'experience', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <button
          className={`mobile-menu-button ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <li className={activeSection === 'education' ? 'active' : ''}>
            <button onClick={() => scrollToSection('education')}>Education</button>
          </li>
          <li className={activeSection === 'certifications' ? 'active' : ''}>
            <button onClick={() => scrollToSection('certifications')}>Skills</button>
          </li>
          <li className={activeSection === 'experience' ? 'active' : ''}>
            <button onClick={() => scrollToSection('experience')}>Experience</button>
          </li>
          <li className={activeSection === 'projects' ? 'active' : ''}>
            <button onClick={() => scrollToSection('projects')}>Projects</button>
          </li>
          <li className={activeSection === 'contact' ? 'active' : ''}>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </li>
          <li>
            <a href="Hansen_Riley_Resume.pdf" download className="resume-button">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
