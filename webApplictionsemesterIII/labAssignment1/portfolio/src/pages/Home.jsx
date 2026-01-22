import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p className="hero-subtitle">Senior Software Engineer | Web & Mobile Developer | IoT Specialist</p>
        <div className="hero-buttons">
          <Link to="/about" className="btn btn-primary">Learn More About Me</Link>
          <Link to="/projects" className="btn btn-secondary">View My Projects</Link>
        </div>
      </section>

      <section className="mission">
        <h2>Mission Statement</h2>
        <p>
          As a dedicated software engineer with over a decade of experience, my mission is to
          deliver customer-centric solutions that enhance user experience and engagement.
          I am committed to building robust, user-friendly applications that solve real-world problems.
        </p>
      </section>

      <section className="quick-links">
        <h2 style={{textAlign: 'center', marginBottom: '2rem'}}>Explore My Work</h2>
        <div className="cards-container">
          <Link to="/projects" className="card">
            <h3>Projects</h3>
            <p>Discover the solutions I've built</p>
          </Link>
          <Link to="/services" className="card">
            <h3>Services</h3>
            <p>See how I can help you</p>
          </Link>
          <Link to="/contact" className="card">
            <h3>Contact</h3>
            <p>Get in touch with me</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
