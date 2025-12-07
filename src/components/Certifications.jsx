import './Certifications.css'

const Certifications = () => {
  const skills = {
    certificates: [
      'Microsoft Azure Fundamentals',
      'Google: Cybersecurity',
      'University of Georgia: Applied Data Science'
    ],
    technical: [
      'Applied Math',
      'Full-Stack Development',
      'Gen-AI/ML',
      'Cloud Computing',
      'Data Engineering'
    ],
    languages: [
      'Python',
      'JavaScript',
      'TypeScript',
      'Java',
      'C',
      'C++',
      'SQL',
      'HTML/CSS',
      'React.js',
      'Node.js'
    ]
  }

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title gradient-text">Certifications & Skills</h2>

        <div className="skills-grid">
          <div className="skill-category">
            <div className="category-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3>Certificates</h3>
            <ul className="skills-list">
              {skills.certificates.map((cert, index) => (
                <li key={index} className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <span className="bullet"></span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          <div className="skill-category">
            <div className="category-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3>Technical Skills</h3>
            <ul className="skills-list">
              {skills.technical.map((skill, index) => (
                <li key={index} className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <span className="bullet"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="skill-category full-width">
            <div className="category-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3>Programming Languages & Frameworks</h3>
            <div className="tech-tags">
              {skills.languages.map((lang, index) => (
                <span key={index} className="tech-tag" style={{ animationDelay: `${index * 0.05}s` }}>
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
