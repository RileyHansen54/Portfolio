import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title gradient-text">Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-line">
            <a href="mailto:rileyrhansen@gmail.com">rileyrhansen@gmail.com</a>
            <span className="separator">•</span>
            <a href="tel:8439732454">(843) 973-2454</a>
            <span className="separator">•</span>
            <a href="https://www.linkedin.com/in/riley-hansen-b22971233/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <span className="separator">•</span>
            <a href="https://github.com/RileyHansen54" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
