const projects = [
  {
    id: 1,
    title: 'GCC Tenant Tracker',
    subtitle: 'Real Estate Management System',
    description: 'A comprehensive property management software for real estate professionals in the GCC region. Centralizes tenant management, financial accounting, and marketing.',
    highlights: ['2,000+ offices and 50,000+ users', '120+ specialized reports', 'Multi-currency support', 'WhatsApp integration', 'Bilingual (English/Arabic)'],
    technologies: ['VB.NET', 'MS SQL Server', 'REST API', 'WhatsApp API'],
    link: 'https://gcctenanttracker.com/',
    role: 'Lead Developer'
  },
  {
    id: 2,
    title: 'Noor Muslim Radio',
    subtitle: 'Islamic Lifestyle App',
    description: 'A comprehensive Islamic lifestyle app for Muslim users worldwide. Features prayer times, Quran, live radio, and community features on iOS and Android.',
    highlights: ['500,000+ active users', '4.8-star rating', 'AR Qibla finder', '30+ Quran reciters', 'Mosque locator'],
    technologies: ['Flutter', 'MySQL', 'PHP API', 'Swift (iOS)'],
    link: 'https://noormuslimradio.com/',
    role: 'Full Stack Developer'
  },
  {
    id: 3,
    title: 'Markad Racing',
    subtitle: 'Mobile Video Game',
    description: 'A thrilling mobile racing game for iOS and Android with exciting gameplay and competitive multiplayer modes.',
    highlights: ['500,000+ downloads', 'Exceeded target by 25%', 'iOS and Android', 'SOLID principles', 'Multiplayer support'],
    technologies: ['Unity', 'C#', 'iOS SDK', 'Android SDK'],
    link: 'https://www.markadracing.com/',
    role: 'Lead Game Developer'
  }
];

function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <p className="projects-intro">
        Here are some key projects I've worked on throughout my career.
      </p>

      <div className="projects-grid">
        {projects.map(project => (
          <article key={project.id} className="project-card">
            <div>
              <h2>{project.title}</h2>
              <span className="project-subtitle">{project.subtitle}</span>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-role">
              <strong>My Role:</strong> {project.role}
            </div>

            <div className="project-highlights">
              <h4>Key Highlights:</h4>
              <ul>
                {project.highlights.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>

            <div className="project-technologies">
              {project.technologies.map((tech, i) => <span key={i} className="tech-tag">{tech}</span>)}
            </div>

            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                Visit Project
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;
