import { useState, useEffect } from 'react'
import './Hero.css'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const titles = [
    'Software Intern',
    'Full-Stack Intern',
    'Mathmatics Student',
    'Open Source Enjoyer',
    'AI Supporter',
    'Python Master'
  ]

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length
      const fullText = titles[i]

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      )

      setTypingSpeed(isDeleting ? 50 : 150)

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, loopNum, typingSpeed])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="profile-section fade-in-up">
            <div className="profile-image-wrapper">
              <div className="profile-glow"></div>
              <img
                src="pfp.jpg"
                alt="Riley"
                className="profile-image"
              />
            </div>
          </div>

          <div className="text-section">
            <h1 className="name fade-in-up" style={{ animationDelay: '0.2s' }}>
              Hi, im Riley
            </h1>

            <div className="title-container fade-in-up" style={{ animationDelay: '0.4s' }}>
              <span className="title-prefix">I'm a </span>
              <span className="typing-text">{displayText}</span>
              <span className="cursor">|</span>
            </div>

            <div className="cta-buttons fade-in-up" style={{ animationDelay: '0.5s' }}>
              <button className="cta-button primary" onClick={scrollToProjects}>
                View My Work
                <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="cta-button secondary" onClick={scrollToContact}>
                Get In Touch
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
