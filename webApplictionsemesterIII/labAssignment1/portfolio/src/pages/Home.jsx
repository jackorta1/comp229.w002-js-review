/**
 * Home Page Component
 * Displays welcome message and mission statement with navigation to other pages
 * @author Aboud Abdalla
 */
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p className="hero-subtitle">
            Senior Software Engineer | Web & Mobile Developer | IoT Specialist
          </p>
          <p className="hero-description">
            Crafting innovative solutions that transform ideas into reality
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">
              Learn More About Me
            </Link>
            <Link to="/projects" className="btn btn-secondary">
              View My Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="mission">
        <h2>Mission Statement</h2>
        <p>
          As a dedicated software engineer with over a decade of experience, my mission is to
          deliver customer-centric solutions that enhance user experience, engagement, and retention.
          I am committed to building functionally rich, robust, and user-friendly applications
          that solve real-world problems and create meaningful impact for businesses and individuals alike.
        </p>
      </section>

      {/* Quick Links Section */}
      <section className="quick-links">
        <h2>Explore My Work</h2>
        <div className="cards-container">
          <Link to="/projects" className="card">
            <h3>Projects</h3>
            <p>Discover the innovative solutions I've built</p>
          </Link>
          <Link to="/services" className="card">
            <h3>Services</h3>
            <p>See how I can help bring your ideas to life</p>
          </Link>
          <Link to="/contact" className="card">
            <h3>Contact</h3>
            <p>Get in touch to discuss your next project</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
