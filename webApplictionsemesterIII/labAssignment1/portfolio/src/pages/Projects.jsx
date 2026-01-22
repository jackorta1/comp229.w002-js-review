/**
 * Projects Page Component
 * Displays portfolio projects with descriptions and links
 * @author Aboud Abdalla
 */
import './Projects.css';

// Project data array containing all portfolio projects
const projectsData = [
  {
    id: 1,
    title: 'GCC Tenant Tracker',
    subtitle: 'Real Estate Management System',
    description: `A comprehensive, bilingual property management software designed for real estate
      professionals across the Gulf Cooperation Council (GCC) region. The platform centralizes
      all aspects of real estate operations, from tenant management to financial accounting.`,
    highlights: [
      '2,000+ offices and 50,000+ active users',
      '120+ specialized reports for analytics',
      'Multi-currency accounting support',
      'WhatsApp and SMS marketing integration',
      'Interactive mapping with GIS integration',
      'Bilingual support (English/Arabic)',
    ],
    technologies: ['VB.NET', 'MS SQL Server', 'REST API', 'WhatsApp API'],
    link: 'https://gcctenanttracker.com/',
    role: 'Lead Developer & Architect',
  },
  {
    id: 2,
    title: 'Noor Muslim Radio',
    subtitle: 'Islamic Lifestyle Mobile Application',
    description: `A comprehensive Islamic lifestyle application serving as a spiritual companion
      for Muslim users worldwide. The app integrates multiple religious and practical features
      into a single, user-friendly platform available on iOS and Android.`,
    highlights: [
      '500,000+ active users worldwide',
      '4.8-star rating on app stores',
      'AR-powered Qibla direction finder',
      '30+ Quran reciters with translations',
      'Live 24/7 Islamic radio streaming',
      'Mosque and halal restaurant locator',
    ],
    technologies: ['Flutter', 'MySQL', 'PHP API', 'Swift (iOS)'],
    link: 'https://noormuslimradio.com/',
    role: 'Full Stack Developer',
  },
  {
    id: 3,
    title: 'Markad Racing',
    subtitle: 'Mobile Video Game',
    description: `A thrilling mobile racing video game developed for iOS and Android platforms.
      The game features exciting gameplay mechanics, stunning graphics, and competitive
      multiplayer modes that captivated players worldwide.`,
    highlights: [
      '500,000+ downloads in the first year',
      'Exceeded initial download target by 25%',
      'Available on iOS and Android',
      'Object-oriented architecture using SOLID principles',
      'Engaging multiplayer racing experience',
      'Regular updates and new content',
    ],
    technologies: ['Unity', 'C#', 'iOS SDK', 'Android SDK'],
    link: 'https://www.markadracing.com/',
    role: 'Lead Game Developer',
  },
];

function Projects() {
  return (
    <div className="projects">
      <div className="projects-container">
        {/* Header */}
        <h1>My Projects</h1>
        <p className="projects-intro">
          Here are some of the key projects I've worked on throughout my career.
          Each project showcases different aspects of my technical expertise and
          problem-solving abilities.
        </p>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <article key={project.id} className="project-card">
              {/* Project Header */}
              <div className="project-header">
                <h2>{project.title}</h2>
                <span className="project-subtitle">{project.subtitle}</span>
              </div>

              {/* Project Description */}
              <p className="project-description">{project.description}</p>

              {/* Role */}
              <div className="project-role">
                <strong>My Role:</strong> {project.role}
              </div>

              {/* Highlights */}
              <div className="project-highlights">
                <h4>Key Highlights:</h4>
                <ul>
                  {project.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Visit Project
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
