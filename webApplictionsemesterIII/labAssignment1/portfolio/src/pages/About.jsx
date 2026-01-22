/**
 * About Me Page Component
 * Displays personal information, profile photo, bio, and resume download link
 * @author Aboud Abdalla
 */
import ownerImage from '../assets/owner.png';
import './About.css';

function About() {
  return (
    <div className="about">
      <div className="about-container">
        {/* Header */}
        <h1>About Me</h1>

        {/* Profile Section */}
        <section className="profile-section">
          <div className="profile-image">
            <img src={ownerImage} alt="Aboud Abdalla - Senior Software Engineer" />
          </div>
          <div className="profile-info">
            <h2>Aboud Abdalla</h2>
            <p className="title">Senior Software Engineer</p>
            <p className="location">Markham, Ontario, Canada</p>
          </div>
        </section>

        {/* Bio Section */}
        <section className="bio-section">
          <h3>Who I Am</h3>
          <p>
            I am an experienced Senior Software Engineer with a strong focus on customer-centric
            solutions and a deep understanding of customer behavior. With over a decade of experience
            in the software industry, I am dedicated to improving customer experience, engagement,
            and retention through innovative technology solutions.
          </p>
          <p>
            My proven track record includes delivering functionally rich, robust, and user-friendly
            applications across multiple platforms. I thrive in dynamic environments, demonstrating
            a strong work ethic, positive energy, and innovative thinking that drives successful
            project outcomes.
          </p>
        </section>

        {/* Skills Section */}
        <section className="skills-section">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Languages</h4>
              <ul>
                <li>JavaScript / Node.js</li>
                <li>VB.NET / C#</li>
                <li>C++ / C</li>
                <li>Java</li>
                <li>SQL</li>
                <li>PHP / Python</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Technologies</h4>
              <ul>
                <li>React</li>
                <li>LAMP Stack</li>
                <li>WebRTC</li>
                <li>DevExpress</li>
                <li>MS SQL Server</li>
                <li>REST APIs</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Specializations</h4>
              <ul>
                <li>Web Development</li>
                <li>Mobile Apps (iOS/Android)</li>
                <li>IoT (Raspberry Pi, ESP32)</li>
                <li>Database Design</li>
                <li>Real Estate Software</li>
                <li>Game Development</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Resume Download */}
        <section className="resume-section">
          <h3>My Resume</h3>
          <p>Download my complete resume to learn more about my experience and qualifications.</p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-download"
          >
            Download Resume (PDF)
          </a>
        </section>

        {/* Contact Link */}
        <section className="connect-section">
          <h3>Let's Connect</h3>
          <div className="connect-links">
            <a
              href="https://www.linkedin.com/in/aelzubair/"
              target="_blank"
              rel="noopener noreferrer"
              className="connect-link"
            >
              LinkedIn Profile
            </a>
            <a
              href="mailto:mraboodez@hotmail.com"
              className="connect-link"
            >
              mraboodez@hotmail.com
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
