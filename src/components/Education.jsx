import './Education.css'

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title gradient-text">Education</h2>

        <div className="education-content">
          <div className="education-card">
            <div className="card-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>

            <div className="card-header">
              <h3>University of Georgia</h3>
              <span className="location">Athens, GA</span>
            </div>

            <div className="degree-info">
              <div className="degree">
                <strong>Bachelor of Science in Computer Science</strong>
                <span className="minor">Minor in Mathematics</span>
              </div>
              <div className="graduation">Expected Graduation: Spring 2025</div>
            </div>

            <div className="highlights">
              <div className="highlight-item">
                <span className="highlight-label">GPA</span>
                <span className="highlight-value">3.6 / 4.0</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-label">Emphasis</span>
                <span className="highlight-value">Artificial Intelligence</span>
              </div>
            </div>

            <div className="coursework">
              <h4>Relevant Coursework</h4>
              <div className="course-tags">
                <span className="tag">Linear Algebra</span>
                <span className="tag">Algorithms</span>
                <span className="tag">Data Structures</span>
                <span className="tag">Database Management</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
