import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Terma Copilot',
      description: 'On-premises AI Chatbot with React JS frontend, FastAPI backend, and LLM Triton Server',
      highlights: [
        'LLM averages 120 words/second, FastAPI handles 290+ concurrent connections',
        'RAG-per-user file system with PostgreSQL and PGvector for AI file access',
        'Tool calling integration with Confluence, Bitbucket, and Jira via MCP'
      ],
      tags: ['React', 'FastAPI', 'AI/ML', 'PostgreSQL', 'MCP'],
      gradient: 'linear-gradient(135deg, #ba0c2f 0%, #8b0000 100%)'
    },
    {
      title: 'S&P500 Web-Scraper',
      description: 'Node.js scraper for S&P500 stock statistics from slickcharts.com',
      highlights: [
        'Scrapes 500+ SPY stocks with 0.59-second runtime',
        'Supports multiple stock indexes for financial modeling',
        'Provides metrics to analyze stock performance patterns'
      ],
      tags: ['Node.js', 'Web Scraping', 'Data Analysis'],
      gradient: 'linear-gradient(135deg, #dc143c 0%, #ff4444 100%)'
    },
    {
      title: 'Face Detection Model Analysis',
      description: 'Performance comparison of face detection models on WIDERFACE dataset',
      highlights: [
        'Compared YOLO, MCTNN, and HCC models with 80/20 data split',
        'YOLO achieved 92% accuracy (fastest), MCTNN 87%, HCC 89%',
        'Analyzed speed and accuracy tradeoffs for production deployment'
      ],
      tags: ['Python', 'Computer Vision', 'YOLO', 'TensorFlow'],
      gradient: 'linear-gradient(135deg, #ff4444 0%, #ff6b6b 100%)'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title gradient-text">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-highlights">
                  <ul>
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx}>
                        <span className="dash">—</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
