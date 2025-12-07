import { useState } from 'react'
import './Experience.css'

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const experiences = [
    {
      role: 'Software Engineering Intern',
      company: 'Terma Group',
      period: 'May 2025 – Present',
      location: 'Athens, GA',
      achievements: [
        'Independently developed Terma Copilot, an internal chatbot for Terma Employees',
        'Worked with other interns to create an automated unit testing pipeline for embedded systems',
        'Pitched a business case to management for a $48,000 AI workstation and was added to Summers\' budget',
        'Accepted an internship extension at the end of August, currently training the LLM on internal data'
      ],
      color: '#ba0c2f'
    },
    {
      role: 'IT Help Desk Associate',
      company: 'University of Georgia',
      period: 'Aug 2023 – May 2025',
      location: 'Athens, GA',
      achievements: [
        'Diagnosed and troubleshooted classroom-related issues for students and teachers in class',
        'Fixed hardware and software issues on Cameras, MacBooks, iPads, and a variety of other devices',
        'Utilized disk cloning and imaging software to facilitate efficient system setups, enabling deployment of the UGA EITS network configurations across multiple computers'
      ],
      color: '#dc143c'
    },
    {
      role: 'Full-Stack Intern',
      company: 'CastlePoint Investments',
      period: 'May 2024 – Nov 2024',
      location: 'Atlanta, GA',
      achievements: [
        'Reconstructed the company website utilizing React JS, improving website performance and stability',
        'Designed and presented six interactive website prototypes made in Figma',
        'Researched the EDGAR SEC database to make a page to list recent insider trading reports'
      ],
      color: '#ff4444'
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title gradient-text">Professional Experience</h2>

        <div className="experience-container">
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`timeline-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="timeline-dot" style={{ background: exp.color }}></div>
                <div className="timeline-content">
                  <div className="company">{exp.company}</div>
                  <div className="period">{exp.period}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="experience-details">
            <div className="experience-card">
              <div className="card-top" style={{ borderTopColor: experiences[activeIndex].color }}>
                <h3>{experiences[activeIndex].role}</h3>
                <div className="company-info">
                  <span className="company-name">{experiences[activeIndex].company}</span>
                  <span className="separator">•</span>
                  <span className="location">{experiences[activeIndex].location}</span>
                </div>
                <div className="period">{experiences[activeIndex].period}</div>
              </div>

              <div className="achievements">
                <h4>Key Achievements</h4>
                <ul>
                  {experiences[activeIndex].achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="achievement-item"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
